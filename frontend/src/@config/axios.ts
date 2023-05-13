import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";


const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

axiosInstance.interceptors.request.use(
  response=> {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  error => {
    toast.error(error.response.data.username[0], {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: false,
    });
    return Promise.reject(error);
  }
);


export default axiosInstance;
