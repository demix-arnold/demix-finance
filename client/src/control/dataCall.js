import { api } from "../control/axios";

export const chartDataCall = async (sheetNum) => {
  const list = await api("/api/db0", "post", {
    param: [sheetNum],
  });
  //   console.log("리스트 업데이트", list);
  return list;
};

export const chartDataCall1 = async (sheetNum) => {
  const list = await api("/api/db1", "post", {
    param: [sheetNum],
  });
  //   console.log("리스트 업데이트1");
  return list;
};
