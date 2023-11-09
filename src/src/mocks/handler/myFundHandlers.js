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
];
