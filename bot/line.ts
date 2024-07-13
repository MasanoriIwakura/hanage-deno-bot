import type { Context } from "../deps.ts";
import schedules, { businessHours, Schedule } from "../hanage/schedules.ts";

const CHANNEL_ACCESS_TOKEN = Deno.env.get("LINE_CHANNEL_ACCESS_TOKEN") || "";

export default async function (c: Context) {
  const json = await c.req.json();
  console.log(json);

  let replyMessage = null;
  if (json.events.length > 0) {
    const message = json.events[0]?.message?.text;
    replyMessage = hanageMessageActions(message);

    if (replyMessage !== null) {
      await postReplyMessage(replyMessage, json.events[0]?.replyToken);
    }
  }

  return c.text(replyMessage ?? "No message", 200);
}

const hanageMessageActions = (text: string | null) => {
  const now = new Date();
  const thisYear = now.getFullYear().toString();
  const thisMonth = now.getMonth() + 1;

  if (text?.includes("今月の鼻毛")) {
    return monthlyScheduleMessage(thisYear, thisMonth.toString());
  }

  if (text?.includes("来月の鼻毛")) {
    let month = thisMonth + 1;
    let year = thisYear;
    if (month > 12) {
      year = (Number(thisYear) + 1).toString();
      month = 1;
    }
    return monthlyScheduleMessage(year, month.toString());
  }

  if (text?.includes("今日の鼻毛")) {
    return daylyScheduleMessage(
      thisYear,
      thisMonth.toString(),
      now.getDate().toString()
    );
  }

  if (text?.includes("明日の鼻毛")) {
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const year = tomorrow.getFullYear().toString();
    const month = (tomorrow.getMonth() + 1).toString();
    const day = tomorrow.getDate().toString();
    return daylyScheduleMessage(year, month, day);
  }

  // TODO: other actions

  return null;
};

const monthlyScheduleMessage = (year: string, month: string) => {
  const monthlySchedules = schedules[Number(year)][Number(month)];

  const message = `[${month}月の鼻毛]\n`;
  const businessHoursMessage = `[営業時間]\n${businessHours.join("\n")}`;
  const monthlyScheduleMessage = monthlySchedules.reduce(
    (prevValue: string, schedule: Schedule) => {
      const addText = `📅${schedule.from} ~ ${schedule.to}\n🚃${schedule.station.name}\n\n`;
      return prevValue + addText;
    },
    ""
  );

  return message + monthlyScheduleMessage + businessHoursMessage;
};

const daylyScheduleMessage = (year: string, month: string, day: string) => {
  const monthlySchedules = schedules[Number(year)][Number(month)];
  const weeklySchedules = monthlySchedules.find((schedule: Schedule) => {
    return (
      Number(schedule.from.split("-")[2]) <= Number(day) &&
      Number(schedule.to.split("-")[2]) >= Number(day)
    );
  });

  if (weeklySchedules === undefined) {
    return null;
  }

  const message = `[${year}/${month}/${day}の鼻毛]\n`;
  const dailyScheduleMessage = `📅${weeklySchedules.from} ~ ${weeklySchedules.to}\n🚃${weeklySchedules.station.name}\n\n`;
  const businessHoursMessage = `[営業時間]\n${businessHours.join("\n")}`;

  return message + dailyScheduleMessage + businessHoursMessage;
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
