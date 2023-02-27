import { serve } from "https://deno.land/std@0.157.0/http/server.ts";
import { Context, Hono } from "https://deno.land/x/hono@v3.0.0/mod.ts";
import v1Station from "./api/v1/station/index.ts";
import v1Schedule from "./api/v1/schedule/index.ts";
import v1ScheduleYear from "./api/v1/schedule/year.ts";
import v1ScheduleMonth from "./api/v1/schedule/month.ts";
import line from "./bot/line.ts";

const v1 = new Hono();
v1.get("/stations", (c: Context) => v1Station(c));
v1.get("/schedules", (c: Context) => v1Schedule(c));
v1.get("/schedules/:year", (c: Context) => v1ScheduleYear(c));
v1.get("/schedules/:year/:month", (c: Context) => v1ScheduleMonth(c));

const app = new Hono();
app.route("/v1", v1);
app.get("/", (c) => c.text("Welcome to Hanage API!!"));
app.post("/line-bot", (c: Context) => line(c));

serve(app.fetch);
