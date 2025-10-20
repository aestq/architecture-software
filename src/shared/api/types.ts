import type { AxiosResponse } from "axios";

export type RequestConfig<Payload = undefined> = Payload extends undefined
    ? { config?: import("axios").AxiosRequestConfig }
    : { payload: Payload; config?: import("axios").AxiosRequestConfig };

export type ApiResponse<T> = Promise<AxiosResponse<T>>;