import { rest } from "msw";
import API from "@/constants/API.js";

const sonnyFundInfo1 = {
  fundId: 1,
  fundTitle:
    "손흥민 주장된 기념 지하철 광고 🎉🎉 축구중독자가 책임지고 펀딩합니다 ❤️‍🔥",
  thumbnailUrl:
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/4118/production/_119546661_gettyimages-1294130887.jpg",
  targetDate: "2023-12-17",
  targetMoney: "3000000",
  currentMoney: "2340000",
  paymentAmount: "100000",
  celebrityId: "sonny",
  celebrityName: "손흥민",
  celebrityProfileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  organizerId: "soccer123",
  organizerName: "축구도사",
  isInUserWishList: true,
};

const sonnyFundInfo2 = {
  fundId: 2,
  fundTitle: "쏘니 폼 미쳤다 토트넘역 지하철 광고판 달자",
  thumbnailUrl:
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltaf10a2ea551a3e54/6360dc8f67675010b765f257/GettyImages-1432946487.jpg",
  targetDate: "2023-12-24",
  targetMoney: "5000000",
  currentMoney: "100000",
  paymentAmount: "250000",
  celebrityId: "sonny",
  celebrityName: "손흥민",
  celebrityProfileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  isFollowing: false,
  organizerId: "soccer234",
  organizerName: "싸커이삼사",
  isInUserWishList: false,
};

const sonnyFundInfo3 = {
  fundId: 3,
  fundTitle: "쏘니 폼 미쳤다 토트넘역 지하철 광고판 달자",
  thumbnailUrl:
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltaf10a2ea551a3e54/6360dc8f67675010b765f257/GettyImages-1432946487.jpg",
  targetDate: "2023-12-24",
  targetMoney: "5000000",
  currentMoney: "100000",
  celebrityId: "sonny",
  celebrityName: "손흥민",
  celebrityProfileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  isFollowing: false,
  organizerId: "soccer234",
  organizerName: "싸커이삼사",
  isInUserWishList: false,
};

const withdrawalApplyInfo = {
  withdrawalId: 2,
  withdrawalAmount: 1000000,
  usage: "강남역 스크린도어",
  fundId: 5,
  thumbnailUrl:
    "https://file2.nocutnews.co.kr/newsroom/image/2021/07/12/202107121100333094_0.jpg",
  fundTitle: "경수는 앨범 계속내라 진짜로 제발로🥹",
  organizerId: 2,
  organizerName: "도도독ㄷ",
  profileUrl: "https://avatars.githubusercontent.com/u/124874266?s=80&v=4",
};

export const myFundHandlers = [
  // 사용자 정보 조회
  rest.get("/api" + API.MY_FUND.NICKNAME, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        nickname: "경주원",
        profileUrl:
          "https://velog.velcdn.com/images/j8won/profile/55917697-2140-40be-ad07-d2d02137f38e/image.jpeg",
      }),
    );
  }),

  // 팔로잉한 셀럽 조회
  rest.get("/api" + API.MY_FUND.FOLLOW, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        followingCelebList: [
          {
            celebId: 1,
            celebName: "손흥민",
            profileUrl:
              "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
            followerNum: 10000,
          },
          {
            celebId: 3,
            celebName: "설영우",
            profileUrl:
              "https://i.namu.wiki/i/mFwo5sbcGmtVmDcBxMi36FF5-nPXUs5mfoN2pB3YsbAmJe6h4wX35IT2jQZxNOdqE2BtMgbji8Yp-jvCLs4nsQ.webp",
            followerNum: 8000,
          },
          {
            celebId: 4,
            celebName: "이재용",
            profileUrl:
              "https://cdn.thelec.kr/news/photo/202210/18518_16299_646.jpg",
            followerNum: 6500,
          },
        ],
      }),
    );
  }),

  // 후원한 펀딩목록 조회
  rest.get("/api" + API.MY_FUND.SUPPORT, (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("pageIndex");

    if (!pageIndex) return res(ctx.status(400, "pageIndex 없음"));

    return res(
      ctx.status(200),
      ctx.json({
        isLastPage: false,
        currentPage: pageIndex,
        supportFundList: Array.from({ length: 12 }, (_, i) =>
          i % 2 ? sonnyFundInfo2 : sonnyFundInfo1,
        ),
      }),
    );
  }),

  // 주최한 펀딩목록 조회
  rest.get("/api" + API.MY_FUND.HOST, (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("pageIndex");

    if (!pageIndex) return res(ctx.status(400, "pageIndex 없음"));

    return res(
      ctx.status(200),
      ctx.json({
        isLastPage: false,
        currentPage: pageIndex,
        hostFundList: Array.from({ length: 12 }, (_, i) => sonnyFundInfo3),
      }),
    );
  }),

  // 공동관리자일경우 출금신청한 펀딩목록 조회
  rest.get("/api" + API.MY_FUND.WITHDRAWAL, (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("pageIndex");

    if (!pageIndex) return res(ctx.status(400, "pageIndex 없음"));

    return res(
      ctx.status(200),
      ctx.json({
        isLastPage: false,
        currentPage: pageIndex,
        withdrawalApplyFundList: Array.from(
          { length: 12 },
          (_, i) => withdrawalApplyInfo,
        ),
      }),
    );
  }),

  // 공동관리자일 경우 출금신청 승인
  rest.post("/api" + API.MY_FUND.APPROVAL, (req, res, ctx) => {
    const { postId, withdrawalId } = req.body;

    if (!postId || !withdrawalId) {
      return res(
        ctx.status(400),
        ctx.json({ message: "출금신청 승인에 문제가 발생했습니다." }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ message: "성공적으로 출금승인이 완료되었습니다." }),
    );
  }),
];
