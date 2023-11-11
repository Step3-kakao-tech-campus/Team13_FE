import axios from "axios";
import authAPI from "@/api/authAPI.js";

const baseUrl = import.meta.env.DEV
  ? import.meta.env.VITE_FUNDERING_API
  : "/api";

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

    config.headers.Authorization = accessToken;
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
    if (
      !err.response ||
      !err.response.status ||
      !localStorage.getItem("refreshToken")
    ) {
      return Promise.reject(err);
    }

    const originalRequest = err.config;
    const refreshToken = localStorage
      .getItem("refreshToken")
      ?.replace(/"/gi, "");

    if (!refreshToken) return Promise.reject(err);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("userProfile");

    const newAccessToken = authAPI.refreshToken({ refreshToken });
    localStorage.setItem("accessToken", newAccessToken);

    originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
    return axios(originalRequest);
  },
);

export default instance;
