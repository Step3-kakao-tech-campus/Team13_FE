import instance from "@/api/instance.js";
import API from "@/constants/API.js";

/**
 * 펀딩 목록 조회 api
 * @param {number | string} pageIndex
 * @param {string=} keyword
 * @param {string=} sortType
 * @returns {Promise<axios.AxiosResponse<any>>} a
 */

const getFundInfoList = async ({ pageIndex, keyword, sortType }) => {
  return await instance({
    url: API.FUND.GET_LIST,
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

export default { getFundInfoList, postFundLike, deleteFundLike };
