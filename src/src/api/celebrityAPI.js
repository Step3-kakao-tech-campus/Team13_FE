import instance from "@/api/instance.js";
import API from "@/constants/API.js";
import {
  CelebDetailInfoDto,
  SimpleCelebInfoDto,
} from "@/api/dto/celebrity.dto.js";

/**
 * 셀럽 목록 조회 api
 * @param {number | string} pageIndex
 * @param {string=} keyword
 * @param {string=} sortType
 */

const getCelebInfoList = async ({ pageIndex, keyword, sortType }) => {
  const { data } = await instance({
    url: API.CELEBRITY.LIST,
    method: "GET",
    params: { page: pageIndex, keyword: keyword, size: 12 },
  });
  return data.response;
};

/**
 * 메인페이지 심플셀럽 목록 조회 api
 */

const getSimpleCelebInfoList = async () => {
  const { data } = await instance({
    url: API.CELEBRITY.RECOMMEND,
    method: "GET",
  });
  return data.response.map((data) => new SimpleCelebInfoDto(data));
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
  const formData = new FormData();
  formData.append("thumbnail", profileImage);

  const dto = {
    celebName,
    celebGender,
    celebCategory,
    celebGroup,
  };
  formData.append(
    "celebRequestDTO",
    new Blob([JSON.stringify(dto)], { type: "application/json" }),
  );

  return await instance({
    url: API.CELEBRITY.REGISTER,
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
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

  return new CelebDetailInfoDto({
    celebId: data?.response?.celebId,
    celebName: data?.response?.celebName,
    celebGender: data?.response?.celebGender,
    celebGroup: data?.response?.celebGroup,
    celebCategory: data?.response?.celebCategory,
    profileUrl: data?.response?.profileImage,
    followerNum: data?.response?.followerCount,
    rank: { follower: data?.response?.followerRank },
  });
};

/**
 * 셀럽관련 펀딩목록 조회 api
 */
const getCelebRelatedFund = async ({ celebId, pageIndex, sortType }) => {
  const { data } = await instance({
    url: API.CELEBRITY.FUNDING(celebId),
    method: "GET",
    params: {
      celebId: celebId,
      page: pageIndex,
      size: 12,
    },
  });

  return data.response;
};

export default {
  getCelebInfoList,
  postCelebFollow,
  postCelebUnfollow,
  postCelebApply,
  getCelebDetailInfo,
  getCelebRelatedFund,
  getSimpleCelebInfoList,
};
