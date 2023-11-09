import { rest } from "msw";
import API from "@/constants/API.js";

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
];
