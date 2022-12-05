import { request } from "umi";

export const getStuApi = () => {
  return request("/classes/stu");
};
