import axios from "axios";

const baseUrl = import.meta.env.VITE_USE_MOCK_API
  ? `${import.meta.env.BASE_URL}/api`
  : import.meta.env.VITE_FUNDERING_API;

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
