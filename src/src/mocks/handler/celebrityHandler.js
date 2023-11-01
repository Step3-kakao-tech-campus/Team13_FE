import { rest } from "msw";
import API from "@/constants/API.js";

const sonnyCelebInfo = {
  celebId: 1,
  celebName: "손흥민",
  profileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  fundInProgressNum: 30,
  totalFundMoney: 35000000,
  followerNum: 10000,
  isFollowing: false,
  rank: 1,
};

const kinginCelebInfo = {
  celebId: 2,
  celebName: "이강인",
  profileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  fundInProgressNum: 32,
  totalFundMoney: 38000000,
  followerNum: 9000,
  isFollowing: false,
  rank: 2,
};

const wooCelebInfo = {
  celebId: 3,
  celebName: "설영우",
  profileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  fundInProgressNum: 26,
  totalFundMoney: 35000000,
  followerNum: 8000,
  isFollowing: false,
  rank: 3,
};

const youngCelebInfo = {
  celebId: 4,
  celebName: "이재용",
  profileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  fundInProgressNum: 25,
  totalFundMoney: 7500,
  followerNum: 10000,
  isFollowing: false,
  rank: 4,
};

export const celebrityHandlers = [
  // 셀럽 목록 조회
  rest.get("/api" + API.CELEBRITY.LIST, (req, res, ctx) => {
    const keyword = req.url.searchParams.get("keyword");
    const pageIndex = req.url.searchParams.get("pageIndex");
    const sortType = req.url.searchParams.get("sortType");

    const celebList = Array.from({ length: 12 }, (_, i) =>
      i === 0
        ? sonnyCelebInfo
        : i === 1
        ? kinginCelebInfo
        : i === 2
        ? wooCelebInfo
        : youngCelebInfo,
    );

    if (!pageIndex) return res(ctx.status(400, "pageIndex 없음"));

    return res(
      ctx.status(200),
      ctx.json({
        isLastPage: false,
        currentPage: pageIndex,
        celebList: celebList,
        keyword: keyword,
        sortType: sortType,
      }),
    );
  }),
];
