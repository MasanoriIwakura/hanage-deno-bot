import { test, expect } from "@playwright/test";
import dayjs from "dayjs";
import Jimp from "jimp";

const EKIBANA_URL = `https://www.ekibana.com/tokyocalendar${dayjs().year()}`;

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
