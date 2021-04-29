import axios from "axios";
import dotenv from "dotenv";

import { getToken } from "./auth";

dotenv.config();

export const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    if (config.params?.noAuth) {
      delete config.headers.Authorization;
    } else {
      config.headers.Authorization = `Bearer ${getToken()}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const noAuth = {
  params: {
    noAuth: true,
  },
};

export const {
  get: fetchGet,
  post: fetchPost,
  put: fetchPut,
  delete: fetchDelete,
} = instance;
