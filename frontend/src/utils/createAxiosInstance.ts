import axios, { AxiosInstance } from "axios";

export const createAxiosInstance = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
  });

  return axiosInstance;
};