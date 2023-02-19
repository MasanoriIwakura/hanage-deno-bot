import dayjs from "npm:dayjs@1.11.7";
import stations, { Station } from "./stations.ts";

export interface Schedule {
  station: Station;
  from: Date;
  to: Date;
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
      from: dayjs("2023-01-04").toDate(),
      to: dayjs("2023-01-08").toDate(),
    },
    {
      station: stations.ichigaya,
      from: dayjs("2023-01-09").toDate(),
      to: dayjs("2023-01-15").toDate(),
    },
    {
      station: stations.shinjukuSanchome,
      from: dayjs("2023-01-16").toDate(),
      to: dayjs("2023-01-22").toDate(),
    },
    {
      station: stations.ogawamachi,
      from: dayjs("2023-01-23").toDate(),
      to: dayjs("2023-01-29").toDate(),
    },
    {
      station: stations.bakuroYokoyama,
      from: dayjs("2023-01-30").toDate(),
      to: dayjs("2023-01-31").toDate(),
    },
  ],
  2: [
    {
      station: stations.bakuroYokoyama,
      from: dayjs("2023-02-01").toDate(),
      to: dayjs("2023-02-05").toDate(),
    },
    {
      station: stations.ichigaya,
      from: dayjs("2023-02-09").toDate(),
      to: dayjs("2023-02-15").toDate(),
    },
    {
      station: stations.shinjukuSanchome,
      from: dayjs("2023-02-13").toDate(),
      to: dayjs("2023-02-19").toDate(),
    },
    {
      station: stations.ogawamachi,
      from: dayjs("2023-02-20").toDate(),
      to: dayjs("2023-02-26").toDate(),
    },
    {
      station: stations.bakuroYokoyama,
      from: dayjs("2023-02-27").toDate(),
      to: dayjs("2023-02-28").toDate(),
    },
  ],
  3: [
    {
      station: stations.bakuroYokoyama,
      from: dayjs("2023-03-01").toDate(),
      to: dayjs("2023-03-05").toDate(),
    },
    {
      station: stations.ichigaya,
      from: dayjs("2023-03-06").toDate(),
      to: dayjs("2023-03-12").toDate(),
    },
    {
      station: stations.shinjukuSanchome,
      from: dayjs("2023-03-13").toDate(),
      to: dayjs("2023-03-19").toDate(),
    },
  ],
};

const schedules: SchedulesOfYear = {
  2023: schedules2023,
};

export default schedules;
