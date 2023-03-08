import type { Context } from "../../../deps.ts";
import stations from "../../../hanage/stations.ts";

export default function (c: Context) {
  const resultStations = Object.values(stations).map((station) => {
    return { id: station.id, name: station.name };
  });

  return c.json(resultStations);
}
