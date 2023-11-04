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
    "https://i.namu.wiki/i/sfvk_xnvWlwCiFo3X6cdfzf621AlwLjGRZ88bIcrIt99EwxqOQVGGp7gMEH6gllADZl1kLJdIeJD3Ooq4LOYOg.webp",
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
    "https://i.namu.wiki/i/mFwo5sbcGmtVmDcBxMi36FF5-nPXUs5mfoN2pB3YsbAmJe6h4wX35IT2jQZxNOdqE2BtMgbji8Yp-jvCLs4nsQ.webp",
  fundInProgressNum: 26,
  totalFundMoney: 35000000,
  followerNum: 8000,
  isFollowing: false,
  rank: 3,
};

const youngCelebInfo = {
  celebId: 4,
  celebName: "이재용",
  profileUrl: "https://cdn.thelec.kr/news/photo/202210/18518_16299_646.jpg",
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

  // 셀럽 팔로우
  rest.post("/api" + API.CELEBRITY.FOLLOW(":celebId"), (req, res, ctx) => {
    const { celebId } = req.body;

    if (!celebId) {
      return res(
        ctx.status(400),
        ctx.json({ message: "존재하지 않는 셀럽입니다" }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ message: "성공적으로 셀럽을 팔로우했습니다!" }),
    );
  }),

  // 셀럽 언팔로우
  rest.post("/api" + API.CELEBRITY.UNFOLLOW(":celebId"), (req, res, ctx) => {
    const { celebId } = req.body;

    if (!celebId) {
      return res(
        ctx.status(400),
        ctx.json({ message: "존재하지 않는 셀럽입니다" }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ message: "성공적으로 팔로우가 취소되었습니다." }),
    );
  }),
];
