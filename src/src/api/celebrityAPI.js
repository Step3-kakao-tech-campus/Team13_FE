import instance from "@/api/instance.js";
import API from "@/constants/API.js";
import { CelebDetailInfoDto } from "@/api/dto/celebrity.dto.js";

/**
 * 셀럽 목록 조회 api
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

/**
 * 셀럽 팔로우 api
 */
const postCelebFollow = async (celebId) => {
  return await instance({
    url: API.CELEBRITY.FOLLOW(celebId),
    method: "POST",
    data: { celebId },
  });
};

/**
 * 셀럽 언팔로우 api
 */
const postCelebUnfollow = async (celebId) => {
  return await instance({
    url: API.CELEBRITY.UNFOLLOW(celebId),
    method: "POST",
    data: { celebId },
  });
};

/**
 * 셀럽 신청 api
 */
const postCelebApply = async ({
  celebName,
  celebGender,
  celebCategory,
  celebGroup,
  profileImage,
}) => {
  return await instance({
    url: API.CELEBRITY.REGISTER,
    method: "POST",
    data: { celebName, celebGender, celebCategory, celebGroup, profileImage },
  });
};

/**
 * 셀럽 상세정보 조회 api
 */
const getCelebDetailInfo = async (celebId) => {
  const { data } = await instance({
    url: API.CELEBRITY.DETAIL(celebId),
    method: "GET",
  });

  return new CelebDetailInfoDto(data);
};

/**
 * 셀럽관련 펀딩목록 조회 api
 */
const getCelebRelatedFund = async ({ celebId, pageIndex, sortType }) => {
  return await instance({
    url: API.CELEBRITY.FUNDING(celebId),
    method: "GET",
    params: {
      celebId: celebId,
      pageIndex: pageIndex,
      sortType: sortType,
    },
  });
};

export default {
  getCelebInfoList,
  postCelebFollow,
  postCelebUnfollow,
  postCelebApply,
  getCelebDetailInfo,
  getCelebRelatedFund,
};
