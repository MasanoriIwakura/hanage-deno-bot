import { SchedulesOfMonth } from "..";
import stations, { holiday } from "../../stations";

export const schedules2025: SchedulesOfMonth = {
  1: [
    {
      station: holiday,
      from: "2025-01-01",
      to: "2025-01-05",
    },
    {
      station: stations.ichigaya,
      from: "2025-01-06",
      to: "2025-01-12",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2025-01-13",
      to: "2025-01-19",
    },
    {
      station: stations.ogawamachi,
      from: "2025-01-20",
      to: "2025-01-26",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2025-01-27",
      to: "2025-01-31",
    },
  ],
  2: [
    {
      station: stations.bakuroYokoyama,
      from: "2025-02-01",
      to: "2025-02-02",
    },
    {
      station: stations.ichigaya,
      from: "2025-02-03",
      to: "2025-02-09",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2025-02-10",
      to: "2025-02-16",
    },
    {
      station: stations.ogawamachi,
      from: "2025-02-17",
      to: "2025-02-23",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2025-02-24",
      to: "2025-02-29",
    },
  ],
};
