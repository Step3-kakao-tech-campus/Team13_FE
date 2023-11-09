import instance from "@/api/instance.js";
import API from "@/constants/API.js";
import { MyFundUserInfoDto } from "./dto/myFund.dto.js";
import { SimpleCelebInfoDto } from "./dto/celebrity.dto.js";

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

/**
 * My펀딩 팔로잉한 셀럽 조회 api
 */

const getFollowingCelebByToken = async () => {
  const { data } = await instance({
    url: API.MY_FUND.FOLLOW,
    method: "GET",
  });
  return data.followingCelebList.map((celeb) => new SimpleCelebInfoDto(celeb));
};

/**
 * My펀딩 후원한 펀딩목록 조회 api
 */

const getSupportFundListByToken = async ({ pageIndex }) => {
  return await instance({
    url: API.MY_FUND.SUPPORT,
    method: "GET",
    params: { pageIndex: pageIndex },
  });
};

/**
 * My펀딩 주최한 펀딩목록 조회 api
 */

const getHostFundListByToken = async ({ pageIndex }) => {
  return await instance({
    url: API.MY_FUND.HOST,
    method: "GET",
    params: { pageIndex: pageIndex },
  });
};

export default {
  getMyFundUserInfoByToken,
  getFollowingCelebByToken,
  getSupportFundListByToken,
  getHostFundListByToken,
};
