import { Context } from "https://deno.land/x/hono@v3.0.0/mod.ts";
import schedules from "../../../hanage/schedules.ts";

export default function (c: Context) {
  return c.json(schedules);
}
