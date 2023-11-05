import { rest } from "msw";
import API from "@/constants/API.js";

// 셀럽 목록조회 데이터
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

// 셀럽상세정보 데이터
const sonnyCelebDetailInfo = {
  celebId: 1,
  celebName: "손흥민",
  celebGroup: "토트넘",
  celebGender: "남",
  celebCategory: "스포츠",
  profileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  fundInProgressNum: 30,
  totalFundMoney: 35000000,
  followerNum: 10000,
  isFollowing: false,
  rank: {
    follower: 1,
    fundMoney: 2,
  },
};

const kinginCelebDetailInfo = {
  celebId: 2,
  celebName: "이강인",
  celebGroup: "PSG",
  celebGender: "남",
  celebCategory: "스포츠",
  profileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  fundInProgressNum: 32,
  totalFundMoney: 38000000,
  followerNum: 9000,
  isFollowing: false,
  rank: {
    follower: 2,
    fundMoney: 1,
  },
};

const wooCelebDetailInfo = {
  celebId: 3,
  celebName: "설영우",
  celebGender: "남",
  celebCategory: "스포츠",
  profileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  fundInProgressNum: 26,
  totalFundMoney: 35000000,
  followerNum: 8000,
  isFollowing: false,
  rank: {
    follower: 3,
    fundMoney: 3,
  },
};

const youngCelebDetailInfo = {
  celebId: 4,
  celebName: "이재용",
  celebGroup: "삼성",
  celebGender: "남",
  celebCategory: "기타",
  profileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  fundInProgressNum: 25,
  totalFundMoney: 7500,
  followerNum: 10000,
  isFollowing: false,
  rank: {
    follower: 4,
    fundMoney: 4,
  },
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

  // 셀럽 신청
  rest.post("/api" + API.CELEBRITY.REGISTER, (req, res, ctx) => {
    const { celebName, celebGender, celebCategory, celebGroup, profileImage } =
      req.body;

    if (!celebName || !celebGender || !celebCategory || !profileImage) {
      return res(
        ctx.status(400),
        ctx.json({ message: "필수 정보가 누락되었습니다" }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ message: "성공적으로 셀럽신청이 완료되었습니다." }),
    );
  }),

  // 셀럽 상세정보 조회
  rest.get("/api" + API.CELEBRITY.DETAIL(":celebId"), (req, res, ctx) => {
    const { celebId } = req.params;

    const celebDetailData = {
      1: sonnyCelebDetailInfo,
      2: kinginCelebDetailInfo,
      3: wooCelebDetailInfo,
      4: youngCelebDetailInfo,
    };

    const celebDetailInfo = celebDetailData[celebId];

    if (celebDetailInfo) {
      return res(ctx.status(200), ctx.json(celebDetailInfo));
    } else {
      return res(
        ctx.status(400),
        ctx.json({ message: "존재하지 않는 셀럽입니다" }),
      );
    }
  }),
];
