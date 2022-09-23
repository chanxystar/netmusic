import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const service: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 8000,
});
//请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let cookie= localStorage.getItem('cookie')||''
    cookie = encodeURIComponent(cookie)
    config.data =  {...config.data,cookie}
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
      return config;
    } else {
      return Promise.reject(statusText);
    }
  },
  (error: any) => {
    Promise.reject(error);
  }
);
export default service;
