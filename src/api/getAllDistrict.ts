import { http } from "@/utils/http";


export const getAllDistrict = () => {
  return http.request("get", `/api/getAllDistrict`);
};