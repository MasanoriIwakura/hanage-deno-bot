import stations, { holiday, Station } from "./stations.ts";

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
  4: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-04-06",
      to: "2023-04-09",
    },
    {
      station: stations.ichigaya,
      from: "2023-04-10",
      to: "2023-04-16",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-04-17",
      to: "2023-04-23",
    },
    {
      station: stations.ogawamachi,
      from: "2023-04-24",
      to: "2023-04-30",
    },
  ],
  5: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-05-01",
      to: "2023-05-07",
    },
    {
      station: stations.ichigaya,
      from: "2023-05-08",
      to: "2023-05-14",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-05-15",
      to: "2023-05-21",
    },
    {
      station: stations.ogawamachi,
      from: "2023-05-22",
      to: "2023-05-28",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2023-05-29",
      to: "2023-05-31",
    },
  ],
  6: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-06-01",
      to: "2023-06-04",
    },
    {
      station: stations.ichigaya,
      from: "2023-06-05",
      to: "2023-06-11",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-06-12",
      to: "2023-06-18",
    },
  ],
  7: [
    {
      station: holiday,
      from: "2023-07-01",
      to: "2023-07-09",
    },
    {
      station: stations.ichigaya,
      from: "2023-07-10",
      to: "2023-07-16",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-07-17",
      to: "2023-07-23",
    },
    {
      station: stations.ogawamachi,
      from: "2023-07-24",
      to: "2023-07-30",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2023-07-31",
      to: "2023-07-31",
    },
  ],
  8: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-08-01",
      to: "2023-08-06",
    },
    {
      station: stations.ichigaya,
      from: "2023-08-07",
      to: "2023-08-13",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-08-14",
      to: "2023-08-20",
    },
    {
      station: stations.ogawamachi,
      from: "2023-08-21",
      to: "2023-08-27",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2023-08-28",
      to: "2023-08-31",
    },
  ],
  9: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-09-01",
      to: "2023-09-03",
    },
    {
      station: stations.ichigaya,
      from: "2023-09-04",
      to: "2023-09-10",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-09-11",
      to: "2023-09-17",
    },
    {
      station: holiday,
      from: "2023-09-18",
      to: "2023-09-30",
    },
  ],
  10: [
    {
      station: holiday,
      from: "2023-10-01",
      to: "2023-10-08",
    },
    {
      station: stations.ichigaya,
      from: "2023-10-09",
      to: "2023-10-15",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-10-16",
      to: "2023-10-22",
    },
    {
      station: stations.ogawamachi,
      from: "2023-10-23",
      to: "2023-10-29",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2023-10-30",
      to: "2023-10-31",
    },
  ],
  11: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-11-01",
      to: "2023-11-05",
    },
    {
      station: stations.ichigaya,
      from: "2023-11-06",
      to: "2023-11-12",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-11-13",
      to: "2023-11-19",
    },
    {
      station: stations.ogawamachi,
      from: "2023-11-20",
      to: "2023-11-26",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2023-11-27",
      to: "2023-11-30",
    },
  ],
  12: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-12-01",
      to: "2023-12-03",
    },
    {
      station: stations.ichigaya,
      from: "2023-12-04",
      to: "2023-12-10",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-12-11",
      to: "2023-12-17",
    },
    {
      station: stations.ogawamachi,
      from: "2023-12-18",
      to: "2023-12-24",
    },
    {
      station: holiday,
      from: "2023-12-25",
      to: "2023-12-31",
    },
  ],
};

const schedules2024: SchedulesOfMonth = {
  1: [
    {
      station: holiday,
      from: "2024-01-01",
      to: "2024-01-07",
    },
    {
      station: stations.ichigaya,
      from: "2024-01-08",
      to: "2024-01-14",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2024-01-15",
      to: "2024-01-21",
    },
    {
      station: stations.ogawamachi,
      from: "2024-01-22",
      to: "2024-01-28",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2024-01-29",
      to: "2024-01-31",
    },
  ],
  2: [
    {
      station: stations.bakuroYokoyama,
      from: "2024-02-01",
      to: "2024-02-04",
    },
    {
      station: stations.ichigaya,
      from: "2024-02-05",
      to: "2024-02-11",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2024-02-12",
      to: "2024-02-18",
    },
    {
      station: stations.ogawamachi,
      from: "2024-02-19",
      to: "2024-02-25",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2024-02-26",
      to: "2024-02-29",
    },
  ],
  3: [
    {
      station: stations.bakuroYokoyama,
      from: "2024-03-01",
      to: "2024-03-03",
    },
    {
      station: stations.ichigaya,
      from: "2024-03-04",
      to: "2024-03-10",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2024-03-11",
      to: "2024-03-17",
    },
    {
      station: holiday,
      from: "2024-03-18",
      to: "2024-03-31",
    },
  ],
  4: [
    {
      station: holiday,
      from: "2024-04-01",
      to: "2024-04-07",
    },
    {
      station: stations.ichigaya,
      from: "2024-04-08",
      to: "2024-04-14",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2024-04-15",
      to: "2024-04-21",
    },
    {
      station: stations.ogawamachi,
      from: "2024-04-22",
      to: "2024-04-28",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2024-04-29",
      to: "2024-04-30",
    },
  ],
  5: [
    {
      station: stations.bakuroYokoyama,
      from: "2024-05-01",
      to: "2024-05-05",
    },
    {
      station: stations.ichigaya,
      from: "2024-05-06",
      to: "2024-05-12",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2024-05-13",
      to: "2024-05-19",
    },
    {
      station: stations.ogawamachi,
      from: "2024-05-20",
      to: "2024-05-26",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2024-05-27",
      to: "2024-05-31",
    },
  ],
  6: [
    {
      station: stations.bakuroYokoyama,
      from: "2024-06-01",
      to: "2024-06-02",
    },
    {
      station: stations.ichigaya,
      from: "2024-06-03",
      to: "2024-06-09",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2024-06-10",
      to: "2024-06-16",
    },
    {
      station: holiday,
      from: "2024-06-17",
      to: "2024-06-30",
    },
  ],
  7: [
    {
      station: holiday,
      from: "2024-07-01",
      to: "2024-07-07",
    },
    {
      station: stations.ichigaya,
      from: "2024-07-08",
      to: "2024-07-14",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2024-07-15",
      to: "2024-07-21",
    },
    {
      station: stations.ogawamachi,
      from: "2024-07-22",
      to: "2024-07-28",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2024-07-29",
      to: "2024-07-31",
    },
  ],
  8: [
    {
      station: stations.bakuroYokoyama,
      from: "2024-08-01",
      to: "2024-08-04",
    },
    {
      station: stations.ichigaya,
      from: "2024-08-05",
      to: "2024-08-11",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2024-08-12",
      to: "2024-08-18",
    },
    {
      station: stations.ogawamachi,
      from: "2024-08-19",
      to: "2024-08-25",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2024-08-26",
      to: "2024-08-31",
    },
  ],
};

const schedules: SchedulesOfYear = {
  2023: schedules2023,
  2024: schedules2024,
};

export default schedules;

export const businessHours = [
  "月-金  12:00~20:00",
  "土  11:00~19:00",
  "日･祝  11:00~17:00",
];
