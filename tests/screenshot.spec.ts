import { test, expect } from "@playwright/test";
import dayjs from "dayjs";
import Jimp from "jimp";

// TODO: 年で行けるはずだったんだけど、別のリンクになっているので一旦封印
// const EKIBANA_URL = `https://www.ekibana.com/tokyocalendar${dayjs().year()}`;
const EKIBANA_URL =
  "https://www.ekibana.com/%E8%A4%87%E8%A3%BD-%E5%87%BA%E5%BA%97%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC";

test("take screenshot", async ({ page }) => {
  await page.goto(EKIBANA_URL);
  await page.screenshot({
    path: "./screenshots/new_calendar.png",
    type: "png",
    fullPage: true,
  });
});

test("compare screenshot", async () => {
  const calendar = await Jimp.read("./screenshots/calendar.png");
  const newCalendar = await Jimp.read("./screenshots/new_calendar.png");

  const distance = Jimp.distance(calendar, newCalendar);

  expect(distance).toEqual(0);
});
