export interface Station {
  id: string;
  name: string;
}

const shinjukuSanchome: Station = {
  id: "S-02",
  name: "新宿三丁目駅",
};

const ichigaya: Station = {
  id: "S-04",
  name: "市ヶ谷駅",
};

const ogawamachi: Station = {
  id: "S-07",
  name: "小川町駅",
};

const bakuroYokoyama: Station = {
  id: "S-09",
  name: "馬喰横山駅",
};

export const holiday: Station = {
  id: "0",
  name: "休み",
};

export const stations = {
  shinjukuSanchome,
  ichigaya,
  ogawamachi,
  bakuroYokoyama,
};
