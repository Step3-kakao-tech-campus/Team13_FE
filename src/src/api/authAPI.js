import instance from "@/api/instance.js";
import API from "@/constants/API.js";

const signIn = async ({ email, password }) => {
  await instance({
    url: API.AUTH.LOGIN,
    method: "POST",
    data: { email: email, password: password },
  });
};

const refreshToken = ({ baseUrl, refreshToken }) => {
  // api 통신
  return "refreshedAccessToken";
};

export default { signIn, refreshToken };
