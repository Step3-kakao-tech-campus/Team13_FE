import instance from "@/api/instance.js";
import API from "@/constants/API.js";
import { SignInDto } from "@/api/dto/auth.dto.js";

/**
 * 로그인 요청 api
 * @param {string} email
 * @param {string} password
 * @returns {Promise<SignInDto>}
 */
const postLogin = async ({ email, password }) => {
  const { data } = await instance({
    url: API.AUTH.LOGIN,
    method: "POST",
    data: { email: email, password: password },
  });

  return new SignInDto({
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    profileImageUrl: data.profileUrl,
    isAdmin: data.isAdmin,
    nickname: data.nickname,
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

/**
 * 회원 탈퇴 api
 * @returns {*}
 */
const deleteAccountByToken = () => {
  return instance({
    url: API.AUTH.DELETE_ACCOUNT,
    method: "POST",
  });
};

export default { postLogin, refreshToken, deleteAccountByToken };
