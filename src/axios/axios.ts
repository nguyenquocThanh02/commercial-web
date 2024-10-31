import axios, {AxiosError} from "axios";

import {applyMockAdapter} from "@/mocks";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const http = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});
const base = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

base.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
const baseClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

baseClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

applyMockAdapter(base);
applyMockAdapter(http);
export {base, http, baseClient};
