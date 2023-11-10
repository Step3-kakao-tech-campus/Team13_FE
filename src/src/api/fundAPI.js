import instance from "@/api/instance.js";
import API from "@/constants/API.js";
import {
  CoAdminUserDto,
  FundDetailInfoDto,
  FundIntroDto,
} from "@/api/dto/fund.dto.js";

/**
 * 펀딩 목록 조회 api
 * @param {number | string} postId
 * @param {string=} keyword
 * @param {string=} sortType
 * @returns {Promise<axios.AxiosResponse<any>>} a
 */

const getFundInfoList = async ({ postId, keyword, sortType }) => {
  if (keyword) {
    return await instance({
      url: API.FUND.LIST + "/search/keyword",
      method: "GET",
      params: { postId: postId, sort: sortType, size: 12, keyword },
    });
  }

  return await instance({
    url: API.FUND.LIST,
    method: "GET",
    params: { postId: postId, sort: sortType, size: 12 },
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

/**
 * 펀딩 상세 정보 조회
 * @param {number | string }fundId
 * @returns {Promise<FundDetailInfoDto>}
 */

const getDetailInfoByFundId = async (fundId) => {
  const response = await instance({
    url: API.FUND.DETAIL(fundId),
    method: "GET",
  });

  const data = response.data.response;
  return new FundDetailInfoDto({
    fundId: data?.postId,
    fundTitle: data?.title,
    thumbnailUrl: data?.thumbnail,
    createdAt: data?.createdAt,
    targetDate: data?.deadline,
    targetMoney: data?.targetPrice,
    currentMoney: data?.currentAmount,
    participantNumber: data?.participant,
    celebrityId: data?.celebId,
    celebrityName: data?.celebrity,
    celebrityProfileUrl: data?.celebImg,
    organizerId: data?.writerId,
    organizerName: data?.writer,
    organizerProfileUrl: data?.writerImg,
    likeCount: data?.heartCount,
    isOrganizer: data?.eqWriter,
  });
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

  return new FundIntroDto({ introduction: data?.response });
};

/**
 * 펀딩 출금 내역 조회
 * @param {string || number} fundId
 * @param {number} pageIndex
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getFundWithdrawInfo = async ({ fundId, pageIndex }) => {
  const { data } = await instance({
    url: API.FUND.WITHDRAW(fundId),
    method: "GET",
    params: { pageIndex: pageIndex },
  });

  return data.response;
};

/**
 * 출금 가능 금액 조회
 * @param {string || number} fundId
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getFundBalance = async (fundId) => {
  const { data } = await instance({
    url: API.FUND.BALANCE(fundId),
    method: "GET",
  });

  return data.balance;
};

/**
 * 출금 신청 post
 * @param {number | string} fundId
 * @param {string} usage
 * @param {string} depositAccount ####-##-#######
 * @param {number} amount
 * @returns {Promise<*>}
 */

const postFundWithdraw = async ({ fundId, usage, depositAccount, amount }) => {
  return await instance({
    url: API.FUND.WITHDRAW(fundId),
    method: "POST",
    data: {
      usage,
      depositAccount,
      amount,
    },
  });
};

/**
 * 출금 인증 이미지 저장하기
 * @param {string || number} fundId
 * @param {string || number} withdrawId
 * @param {FormData} imageForm
 * @returns {Promise<*>}
 */

const postFundWithdrawEvidenceImage = async ({
  fundId,
  withdrawId,
  imageForm,
}) => {
  return await instance({
    url: API.FUND.WITHDRAW_IMAGE({ fundId, withdrawId }),
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: imageForm,
  });
};

export default {
  getFundInfoList,
  postFundLike,
  deleteFundLike,
  getCoAdminByFundId,
  getFundIntroductionByFundId,
  getDetailInfoByFundId,
  getFundWithdrawInfo,
  getFundBalance,
  postFundWithdraw,
  postFundWithdrawEvidenceImage,
};
