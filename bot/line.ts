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
      await postReplyMessage(
        replyMessage,
        json.events[0]?.replyToken,
      );
    }
  }

  return c.text("Success.", 200);
}

const hanageMessageActions = (text: string | null) => {
  // TODO: other actions
  if (text?.includes("今月の鼻毛")) {
    return monthlyScheduleMessage();
  }

  return null;
};

const monthlyScheduleMessage = () => {
  const now = new Date();
  const thisYear = now.getFullYear();
  const thisMonth = now.getMonth() + 1;

  const monthlySchedules = schedules[thisYear][thisMonth];

  let message = "[今月の鼻毛]\n";
  monthlySchedules.forEach((schedule, _index) => {
    message = message.concat(
      `📅${schedule.from} ~ ${schedule.to}\n🚃${schedule.station.name}\n`,
    );
  });

  message = message.concat(`[営業時間]\n${businessHours.join("\n")}`);

  return message;
};

const postReplyMessage = async (
  message: string,
  replyToken: string,
) => {
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
