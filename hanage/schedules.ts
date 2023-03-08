import stations, { Station } from "./stations.ts";

export interface Schedule {
  station: Station;
  from: string;
  to: string;
}

export interface SchedulesOfMonth {
  [month: string]: Schedule[];
}

export interface SchedulesOfYear {
  [year: string]: SchedulesOfMonth;
}

const schedules2023: SchedulesOfMonth = {
  1: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-01-04",
      to: "2023-01-08",
    },
    {
      station: stations.ichigaya,
      from: "2023-01-09",
      to: "2023-01-15",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-01-16",
      to: "2023-01-22",
    },
    {
      station: stations.ogawamachi,
      from: "2023-01-23",
      to: "2023-01-29",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2023-01-30",
      to: "2023-01-31",
    },
  ],
  2: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-02-01",
      to: "2023-02-05",
    },
    {
      station: stations.ichigaya,
      from: "2023-02-09",
      to: "2023-02-15",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-02-13",
      to: "2023-02-19",
    },
    {
      station: stations.ogawamachi,
      from: "2023-02-20",
      to: "2023-02-26",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2023-02-27",
      to: "2023-02-28",
    },
  ],
  3: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-03-01",
      to: "2023-03-05",
    },
    {
      station: stations.ichigaya,
      from: "2023-03-06",
      to: "2023-03-12",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-03-13",
      to: "2023-03-19",
    },
  ],
};

const schedules: SchedulesOfYear = {
  2023: schedules2023,
};

export default schedules;

export const businessHours =
  "月-金  12:00~20:00  土  11:00~19:00  日･祝  11:00~17:00";
