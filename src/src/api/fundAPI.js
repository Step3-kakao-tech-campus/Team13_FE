import instance from "@/api/instance.js";
import API from "@/constants/API.js";
import {
  CoAdminUserDto,
  FundDetailInfoDto,
  FundIntroDto,
} from "@/api/dto/fund.dto.js";

/**
 * 펀딩 목록 조회 api
 * @param {number | string} pageIndex
 * @param {string=} keyword
 * @param {string=} sortType
 * @returns {Promise<axios.AxiosResponse<any>>} a
 */

const getFundInfoList = async ({ pageIndex, keyword, sortType }) => {
  return await instance({
    url: API.FUND.LIST,
    method: "GET",
    params: { pageIndex: pageIndex, keyword: keyword, sortType: sortType },
  });
};

/**
 * 펀딩 좋아요
 * @param {string || number} fundId 펀딩 아이디
 * @returns {Promise<axios.AxiosResponse<any>>}
 */

const postFundLike = async (fundId) => {
  return await instance({
    url: API.FUND.LIKE,
    method: "POST",
    data: { fundId },
  });
};

/**
 * 펀딩 좋아요 취소
 * @param {string || number} fundId 펀딩 아이디
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const deleteFundLike = async (fundId) => {
  return await instance({
    url: API.FUND.LIKE,
    method: "DELETE",
    data: { fundId },
  });
};

const getDetailInfoByFundId = async (fundId) => {
  const { data } = await instance({
    url: API.FUND.DETAIL(fundId),
    method: "GET",
  });
  return new FundDetailInfoDto(data);
};

/**
 * 펀딩 공동관리자 조회
 * @param {string || number} fundId 펀딩 아이디
 * @returns {Promise<CoAdminUserDto[]>}
 */
const getCoAdminByFundId = async (fundId) => {
  const { data } = await instance({
    url: API.FUND.CO_ADMIN(fundId),
    method: "GET",
  });

  return data.coAdminList.map((user) => new CoAdminUserDto(user));
};

/**
 * 펀딩 소개글 조회
 * @param {string || number} fundId 펀딩 아이디
 * @returns {Promise<FundIntroDto>}
 */
const getFundIntroductionByFundId = async (fundId) => {
  const { data } = await instance({
    url: API.FUND.INTRODUCTION(fundId),
    method: "GET",
  });

  return new FundIntroDto({ introduction: data.introduction });
};

export default {
  getFundInfoList,
  postFundLike,
  deleteFundLike,
  getCoAdminByFundId,
  getFundIntroductionByFundId,
  getDetailInfoByFundId,
};
