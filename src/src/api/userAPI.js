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
  return new UserSettingDto(data);
};

/**
 * 회원정보 수정 api
 * @param {Promise<UserSettingDto>}data
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const postUserSettingByToken = async (data) => {
  return await instance({
    url: API.USER.SETTING,
    method: "POST",
    data: new UserSettingDto(data),
  });
};

export default { getUserSettingByToken, postUserSettingByToken };
