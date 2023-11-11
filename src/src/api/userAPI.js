import instance from "@/api/instance.js";
import API from "@/constants/API.js";
import { UserSettingDto } from "@/api/dto/user.dto";

/**
 * 회원정보 조회 api
 * @returns {Promise<UserSettingDto>}
 */

const getUserSettingByToken = async () => {
  const { data } = await instance({
    url: API.USER.SETTING,
    method: "GET",
  });
  return new UserSettingDto({
    nickname: data?.response?.nickname,
    phoneNumber: data?.response?.phoneNumber,
    profileUrl: data?.response?.profileImage,
  });
};

/**
 * 회원정보 수정 api
 * @param {object} data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const changeUserSettingByToken = async (data) => {
  return await instance({
    url: API.USER.SETTING,
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data,
  });
};

export default {
  getUserSettingByToken,
  changeUserSettingByToken,
};
