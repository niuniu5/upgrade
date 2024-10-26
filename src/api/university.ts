import { http } from "@/utils/http";


export const page = (data) => {
  return http.request("get", `/api/`, { params: data });
};