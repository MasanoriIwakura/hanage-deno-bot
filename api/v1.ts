import { Context, Hono } from "https://deno.land/x/hono@v3.0.2/mod.ts";
import v1Station from "./v1/station/index.ts";
import v1Schedule from "./v1/schedule/index.ts";
import v1ScheduleYear from "./v1/schedule/year.ts";
import v1ScheduleMonth from "./v1/schedule/month.ts";

const api = new Hono();
api.get("/stations", (c: Context) => v1Station(c));
api.get("/schedules", (c: Context) => v1Schedule(c));
api.get("/schedules/:year", (c: Context) => v1ScheduleYear(c));
api.get("/schedules/:year/:month", (c: Context) => v1ScheduleMonth(c));

export default api;
