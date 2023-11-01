import instance from "@/api/instance.js";
import API from "@/constants/API.js";

/**
 * 펀딩 목록 조회 api
 * @param {number | string} pageIndex
 * @param {string=} keyword
 * @param {string=} sortType
 */

const getCelebInfoList = async ({ pageIndex, keyword, sortType }) => {
  return await instance({
    url: API.CELEBRITY.LIST,
    method: "GET",
    params: { pageIndex: pageIndex, keyword: keyword, sortType: sortType },
  });
};

export default { getCelebInfoList };
