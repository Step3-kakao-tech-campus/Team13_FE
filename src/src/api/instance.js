import axios from "axios";
import TOKEN from "@/constants/TOKEN.js";
import authAPI from "@/api/authAPI.js";

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

    config.headers.Authorization = `Bearer accessToken`;
    return config;
  },
  function (err) {
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    if (!err.response || !err.response.status) {
      return Promise.reject(err);
    }

    switch (err.response.status) {
      case 401: {
        const originalRequest = err.config;
        const refreshToken = localStorage.getItem(TOKEN.REFRESH);
        localStorage.removeItem(TOKEN.ACCESS);
        localStorage.removeItem(TOKEN.REFRESH);

        if (!refreshToken) return Promise.reject(err);

        const newAccessToken = authAPI.refreshToken({ baseUrl, refreshToken });
        localStorage.setItem(TOKEN.ACCESS, newAccessToken);

        originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      }
      default:
        return Promise.reject(err);
    }
  },
);

export default instance;
