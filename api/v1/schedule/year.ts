import { Context } from "https://deno.land/x/hono@v3.0.0/mod.ts";
import schedules from "../../../hanage/schedules.ts";

export default function (c: Context) {
  const year = c.req.param("year");
  const yearSchedules = schedules[year];
  if (yearSchedules === undefined) {
    return c.notFound();
  }

  return c.json(yearSchedules);
}
