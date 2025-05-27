import axios, { AxiosResponse } from "axios";
import event from "./eventEmitter"; //使用发布订阅模式实现解耦
const ins = axios.create({
  baseUrl: "http://localhost:3000",
});

const successHandler = (res: AxiosResponse): any => {};
const errorHandler = (err: any) => {
  if (error.response.status === 401) {
    event.emit("API:UN_AUTH");
  } else if (error.response.status === 400) {
    event.emit("API:INVALID");
  }
};

ins.interceptors.response.use(successHandler, errorHandler);
