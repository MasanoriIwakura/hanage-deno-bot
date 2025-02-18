import { Station } from "../stations.ts";
import { schedules2023 } from "./years/schedule-2023.ts";
import { schedules2024 } from "./years/schedule-2024.ts";
import { schedules2025 } from "./years/schedule-2025.ts";

export interface Schedule {
  station: Station;
  from: string;
  to: string;
}

export interface SchedulesOfMonth {
  [month: number]: Schedule[];
}

export interface SchedulesOfYear {
  [year: number]: SchedulesOfMonth;
}

const schedules: SchedulesOfYear = {
  2023: schedules2023,
  2024: schedules2024,
  2025: schedules2025,
};

export default schedules;

export const businessHours = [
  "月-金  12:00~20:00",
  "土  11:00~19:00",
  "日･祝  11:00~17:00",
];
