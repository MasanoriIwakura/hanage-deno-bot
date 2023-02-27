import { Context } from "https://deno.land/x/hono@v3.0.0/mod.ts";
import schedules from "../hanage/schedules.ts";

const CHANNEL_ACCESS_TOKEN = Deno.env.get("LINE_CHANNEL_ACCESS_TOKEN") || "";

export default async function (c: Context) {
  const json = await c.req.json();
  if (json.events.length > 0) {
    const message = json.events[0]?.message?.text;
    const replyMessage = hanageMessageActions(message);
    await postReplyMessage(
      replyMessage,
      json.events[0]?.replyToken,
    );
  }

  return c.text("Success.", 200);
}

const hanageMessageActions = (text: string | null) => {
  // TODO: other actions
  if (text?.includes("今月の鼻毛")) {
    return monthlyScheduleMessage();
  } else {
    return "「今月の鼻毛」とメッセージを送信すると今月のスケジュールを確認できます！";
  }
};

const monthlyScheduleMessage = () => {
  const now = new Date();
  const thisYear = now.getFullYear();
  const thisMonth = now.getMonth() + 1;

  const monthlySchedules = schedules[thisYear][thisMonth];
  let message = "[今月のスケジュール]\n";
  monthlySchedules.forEach((schedule, _index) => {
    message = message.concat(
      `${schedule.from} ~ ${schedule.to} => ${schedule.station.name}\n`,
    );
  });

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

  console.log(body);

  return await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify(body),
  });
};
