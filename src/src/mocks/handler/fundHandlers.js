import API from "@/constants/API.js";
import { rest } from "msw";

const sonnyFundInfo = {
  fundId: 1,
  fundTitle:
    "손흥민 주장된 기념 지하철 광고 🎉🎉 축구중독자가 책임지고 펀딩합니다 ❤️‍🔥",
  thumbnailUrl:
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/4118/production/_119546661_gettyimages-1294130887.jpg",
  targetDate: "2023-12-17",
  targetMoney: "3000000",
  currentMoney: "2340000",
  celebrityId: "sonny",
  celebrityName: "손흥민",
  celebrityProfileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  organizerId: "soccer123",
  organizerName: "축구도사",
  isInUserWishList: true,
};

const sonnyFundInfo1 = {
  fundId: 2,
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
  organizerId: "soccer234",
  organizerName: "싸커이삼사",
  isInUserWishList: false,
};

export const fundHandlers = [
  // 펀딩 목록 조회
  rest.get("/api" + API.FUND.GET_LIST, (req, res, ctx) => {
    const keyword = req.url.searchParams.get("keyword");
    const pageIndex = req.url.searchParams.get("pageIndex");
    const sortType = req.url.searchParams.get("sortType");

    if (!pageIndex) return res(ctx.status(400, "pageIndex 없음"));

    return res(
      ctx.status(200),
      ctx.json({
        isLastPage: false,
        currentPage: pageIndex,
        fundList: Array.from({ length: 12 }, (_, i) =>
          i % 2 ? sonnyFundInfo : sonnyFundInfo1,
        ),
        keyword: keyword,
        sortType: sortType,
      }),
    );
  }),

  // 펀딩 좋아요
  rest.post("/api" + API.FUND.LIKE, (req, res, ctx) => {
    const { fundId } = req.body;

    if (!fundId) {
      return res(
        ctx.status(400),
        ctx.json({ message: "존재하지 않는 펀딩입니다" }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ message: "성공적으로 찜 목록에 추가했습니다" }),
    );
  }),

  // 펀딩 좋아요 취소
  rest.delete("/api" + API.FUND.LIKE, (req, res, ctx) => {
    const { fundId } = req.body;

    if (!fundId) {
      return res(
        ctx.status(400),
        ctx.json({ message: "존재하지 않는 펀딩입니다" }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ message: "성공적으로 찜 목록에서 제거했습니다" }),
    );
  }),

  // 공동관리자 조회
  rest.get("/api" + API.FUND.CO_ADMIN + "/:fundId", (req, res, ctx) => {
    const { fundId } = req.params;

    if (!fundId) {
      return res(
        ctx.status(400),
        ctx.json({ message: "존재하지 않는 펀딩입니다" }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        coAdminList: [
          {
            userId: "j8won",
            profileUrl: "https://avatars.githubusercontent.com/u/75734220?v=4",
            nickname: "경주원",
          },
          {
            userId: "sihyonn",
            profileUrl:
              "https://avatars.githubusercontent.com/u/124874266?s=80&v=4",
            nickname: "김시현",
          },
          {
            userId: "Klomachenko",
            profileUrl: "https://avatars.githubusercontent.com/u/102893954?v=4",
            nickname: "이규민",
          },
        ],
      }),
    );
  }),
];
