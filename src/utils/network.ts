import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const service: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 8000,
});
//请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

//响应拦截
service.interceptors.response.use(
  (config: AxiosResponse) => {
    const { status, statusText } = config;
    if (status === 200) {
      return config.data;
    } else {
      return Promise.reject(statusText);
    }
  },
  (error: any) => {
    Promise.reject(error);
  }
);
export default service;
