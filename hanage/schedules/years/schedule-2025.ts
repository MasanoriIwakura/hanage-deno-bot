import { SchedulesOfMonth } from "../index.ts";
import stations, { holiday } from "../../stations.ts";

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
  3: [
    {
      station: stations.bakuroYokoyama,
      from: "2025-03-01",
      to: "2025-03-02",
    },
    {
      station: stations.ichigaya,
      from: "2025-03-03",
      to: "2025-03-09",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2025-03-10",
      to: "2025-03-16",
    },
    {
      station: holiday,
      from: "2025-03-17",
      to: "2025-03-31",
    },
  ],
  4: [
    {
      station: holiday,
      from: "2025-04-01",
      to: "2025-04-06",
    },
    {
      station: stations.ichigaya,
      from: "2025-04-07",
      to: "2025-04-13",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2025-04-14",
      to: "2025-04-20",
    },
    {
      station: stations.ogawamachi,
      from: "2025-04-21",
      to: "2025-04-27",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2025-04-28",
      to: "2025-04-30",
    },
  ],
  5: [
    {
      station: stations.bakuroYokoyama,
      from: "2025-05-01",
      to: "2025-05-04",
    },
    {
      station: stations.ichigaya,
      from: "2025-05-05",
      to: "2025-05-11",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2025-05-12",
      to: "2025-05-18",
    },
    {
      station: stations.ogawamachi,
      from: "2025-05-19",
      to: "2025-05-25",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2025-05-26",
      to: "2025-05-31",
    },
  ],
  6: [
    {
      station: stations.bakuroYokoyama,
      from: "2025-06-01",
      to: "2025-06-01",
    },
    {
      station: stations.ichigaya,
      from: "2025-06-02",
      to: "2025-06-08",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2025-06-09",
      to: "2025-06-15",
    },
    {
      station: holiday,
      from: "2025-06-16",
      to: "2025-06-30",
    },
  ],
};
