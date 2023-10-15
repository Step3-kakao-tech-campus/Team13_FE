import axios from "axios";
import TOKEN from "@/constants/TOKEN.js";

const baseUrl = import.meta.env.VITE_USE_MOCK_API
  ? `${import.meta.env.BASE_URL}/api`
  : import.meta.env.VITE_FUNDERING_API;

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem(TOKEN.ACCESS);

    if (!accessToken) return config;

    config.headers.Authorization = accessToken;
    return config;
  },
  function (err) {
    return Promise.reject(err);
  },
);

export default instance;
