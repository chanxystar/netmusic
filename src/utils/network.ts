import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";


const service = axios.create({
  baseURL:'http://localhost:3000',
  timeout:8000
})


export default service