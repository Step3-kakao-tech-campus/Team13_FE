import axios from "axios";
import authAPI from "@/api/authAPI.js";

const baseUrl = import.meta.env.VITE_USE_MOCK_API
  ? "http://localhost:5173/api"
  : import.meta.env.VITE_FUNDERING_API;

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken")?.replace(/"/gi, "");

    if (!accessToken) return config;

    config.headers.Authorization = `Bearer ${accessToken}`;
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
        const refreshToken = localStorage
          .getItem("refreshToken")
          .replace(/"/gi, "");

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        if (!refreshToken) return Promise.reject(err);

        const newAccessToken = authAPI.refreshToken({ baseUrl, refreshToken });
        localStorage.setItem("accessToken", newAccessToken);

        originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      }
      default:
        return Promise.reject(err);
    }
  },
);

export default instance;
