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
  const { headers, data } = await instance({
    url: API.AUTH.LOGIN,
    method: "POST",
    data: { email: email, password: password },
  });

  // TODO: 추후 profileImageUrl, isAdmin, nickname, refreshToken도 받아야 함
  return new SignInDto({
    accessToken: headers?.authorization,
    refreshToken: data?.refreshToken,
    profileImageUrl: data?.profileUrl,
    isAdmin: data?.isAdmin,
    nickname: data?.nickname,
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
    url: API.USER.SETTING,
    method: "DELETE",
  });
};

/**
 * 회원가입 api
 * @param {string} email
 * @param {string} password
 * @param {string} nickname
 * @return {Promise<*>}
 */
const postSignUp = async ({ email, password, nickname }) => {
  return await instance({
    url: API.AUTH.SIGN_UP,
    method: "POST",
    data: { email, password, nickname },
  });
};

/**
 * 이메일 중복 확인 api
 * @param {string} email
 * @returns {Promise<*>}
 */
const isEmailDuplicate = async ({ email }) => {
  return await instance({
    url: API.AUTH.EMAIL_DUPLICATE,
    method: "POST",
    data: { email },
  });
};

export default {
  postLogin,
  refreshToken,
  deleteAccountByToken,
  postSignUp,
  isEmailDuplicate,
};
