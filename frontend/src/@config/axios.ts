import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "http://localhost:/3001",
});

axiosInstance.interceptors.request.use(
  response=> {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
