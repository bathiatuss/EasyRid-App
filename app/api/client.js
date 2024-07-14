import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.31.93:9000/api",
});

export default apiClient;
