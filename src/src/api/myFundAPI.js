import instance from "@/api/instance.js";
import API from "@/constants/API.js";
import { MyFundUserInfoDto } from "./dto/myFund.dto.js";

/**
 * My펀딩 사용자 정보 조회 api
 */

const getMyFundUserInfoByToken = async () => {
  const { data } = await instance({
    url: API.MY_FUND.NICKNAME,
    method: "GET",
  });
  return new MyFundUserInfoDto(data);
};

export default { getMyFundUserInfoByToken };
