import { test, expect } from "@playwright/test";
import dayjs from "dayjs";

const EKIBANA_URL = `https://www.ekibana.com/tokyocalendar${dayjs().year()}`;

test("take screenshot", async ({ page }) => {
  await page.goto(EKIBANA_URL);
  await page.screenshot({
    path: "./reg_suit_actual_images/calendar.png",
    type: "png",
    fullPage: true,
  });
});
