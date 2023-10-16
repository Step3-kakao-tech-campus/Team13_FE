import API from "@/constants/API.js";
import { rest } from "msw";

export const fundHandlers = [
  rest.get("/api" + API.FUND.GET_LIST, (req, res, ctx) => {
    const keyword = req.url.searchParams.get("keyword");
    const pageIndex = req.url.searchParams.get("pageIndex");
    const accessToken = req.headers.get("accessToken");

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
      isInUserWishList: !!accessToken,
    };

    if (!pageIndex) return res(ctx.status(400, "pageIndex 없음"));

    return res(
      ctx.status(200),
      ctx.json({
        isLastPage: false,
        currentPage: pageIndex + 1,
        fundList: [Array(10).fill(sonnyFundInfo)],
        keyword: keyword,
      }),
    );
  }),
];
