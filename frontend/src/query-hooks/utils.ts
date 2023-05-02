import { AxiosRequestConfig } from "axios";

import axios from "axios";

export const fetchData =
  <T>(url: string, config?: AxiosRequestConfig) =>
  async (): Promise<T> => {
    const response = await axios.get<T>(url, config);
    return response.data;
  };

export const deleteData = async <T = unknown>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axios.delete<T>(url, config);
  return response.data;
};

export const upsertData = async <T = any>(
  method: "post" | "put" | "patch",
  url: string,
  body?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axios[method]<T>(url, body, config);
  return response.data;
};
