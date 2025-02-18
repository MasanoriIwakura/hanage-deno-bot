import type { Context } from "../../../deps.ts";
import schedules from "../../../hanage/schedules/index.ts";

export default function (c: Context) {
  return c.json(schedules);
}
