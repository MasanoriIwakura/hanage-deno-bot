import type { Context } from "../../../deps.ts";
import schedules from "../../../hanage/schedules.ts";

export default function (c: Context) {
  const year = c.req.param("year");
  const yearSchedules = schedules[year];
  if (yearSchedules === undefined) {
    return c.notFound();
  }

  return c.json(yearSchedules);
}
