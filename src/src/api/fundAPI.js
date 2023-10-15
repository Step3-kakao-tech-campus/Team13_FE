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

export default { getFundInfoList };
