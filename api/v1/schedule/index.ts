import type { Context } from "../../../deps.ts";
import schedules from "../../../hanage/schedules.ts";

export default function (c: Context) {
  return c.json(schedules);
}
