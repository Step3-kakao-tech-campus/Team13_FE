import { rest } from "msw";
import API from "@/constants/API.js";

export const celebrityHandlers = [
  // 셀럽 목록 조회
  rest.get("/api" + API.CELEBRITY.LIST, (req, res, ctx) => {
    const keyword = req.url.searchParams.get("keyword");
    const pageIndex = req.url.searchParams.get("pageIndex");
    const sortType = req.url.searchParams.get("sortType");

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
    if (!pageIndex) return res(ctx.status(400, "pageIndex 없음"));

    return res(
      ctx.status(200),
      ctx.json({
        isLastPage: false,
        currentPage: pageIndex,
        celebList: Array(12).fill(sonnyCelebInfo),
        keyword: keyword,
        sortType: sortType,
      }),
    );
  }),
];
