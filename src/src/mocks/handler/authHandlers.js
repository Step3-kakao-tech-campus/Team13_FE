import { rest } from "msw";
import API from "@/constants/API.js";

export const authHandlers = [
  // 로그인
  rest.post("/api" + API.AUTH.LOGIN, (req, res, ctx) => {
    const { email, password } = req.body;

    if (!email || !password)
      return res(
        ctx.status(400),
        ctx.json({ email: email, password: password }),
      );

    return res(
      ctx.status(200),
      ctx.json({
        accessToken: "accessToken",
        refreshToken: "refreshToken",
        profileUrl:
          "https://velog.velcdn.com/images/j8won/profile/55917697-2140-40be-ad07-d2d02137f38e/image.jpeg",
        nickname: "축구도사",
        isAdmin: true,
      }),
    );
  }),

  // 회원 탈퇴
  rest.post("api" + API.AUTH.DELETE_ACCOUNT, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
