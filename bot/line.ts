import { Context } from "https://deno.land/x/hono@v3.0.0/mod.ts";
import schedules, { businessHours } from "../hanage/schedules.ts";

const CHANNEL_ACCESS_TOKEN = Deno.env.get("LINE_CHANNEL_ACCESS_TOKEN") || "";

export default async function (c: Context) {
  const json = await c.req.json();
  console.log(json);

  if (json.events.length > 0) {
    const message = json.events[0]?.message?.text;
    const replyMessage = hanageMessageActions(message);

    if (replyMessage !== null) {
      await postReplyMessage(replyMessage, json.events[0]?.replyToken);
    }
  }

  return c.text("Success.", 200);
}

const hanageMessageActions = (text: string | null) => {
  const now = new Date();
  const thisYear = now.getFullYear();
  const thisMonth = now.getMonth() + 1;

  if (text?.includes("今月の鼻毛")) {
    return monthlyScheduleMessage(thisYear, thisMonth);
  }

  if (text?.includes("来月の鼻毛")) {
    const nextMonth = thisMonth + 1;
    return monthlyScheduleMessage(thisYear, nextMonth);
  }

  // TODO: other actions

  return null;
};

const monthlyScheduleMessage = (year, month) => {
  const monthlySchedules = schedules[year][month];

  const message = `[${month}月の鼻毛]\n`;
  const businessHoursMessage = `[営業時間]\n${businessHours.join("\n")}`;
  const monthlyScheduleMessage = monthlySchedules.reduce(
    (prevValue, schedule) => {
      const addText = `📅${schedule.from} ~ ${schedule.to}\n🚃${schedule.station.name}\n\n`;
      return prevValue + addText;
    },
    ""
  );

  return message + monthlyScheduleMessage + businessHoursMessage;
};

const postReplyMessage = async (message: string, replyToken: string) => {
  const body = {
    replyToken,
    messages: [
      {
        type: "text",
        text: message,
      },
    ],
  };

  return await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify(body),
  });
};
