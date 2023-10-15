import instance from "@/api/instance.js";
import API from "@/constants/API.js";

/**
 * 로그인 요청 api
 * @param {string} email
 * @param {string} password
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const postLogin = async ({ email, password }) => {
  return await instance({
    url: API.AUTH.LOGIN,
    method: "POST",
    data: { email: email, password: password },
  });
};

/**
 * accesstoken 재발급 api
 * @param {string} baseUrl
 * @param {string} refreshToken
 * @returns {string}
 */
const refreshToken = ({ baseUrl, refreshToken }) => {
  // api 통신
  return "refreshedAccessToken";
};

export default { postLogin, refreshToken };
