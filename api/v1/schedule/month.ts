import type { Context } from "../../../deps.ts";
import schedules from "../../../hanage/schedules.ts";

export default function (c: Context) {
  const year = c.req.param("year");
  const month = Number(c.req.param("month"));
  const yearSchedules = schedules[year];
  if (yearSchedules === undefined) {
    return c.notFound();
  }

  const monthSchedules = schedules[year][month];
  if (monthSchedules === undefined) {
    return c.notFound();
  }

  return c.json(monthSchedules);
}
