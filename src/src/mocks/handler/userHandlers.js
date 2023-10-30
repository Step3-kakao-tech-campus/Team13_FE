import { rest } from "msw";
import API from "@/constants/API.js";

export const userHandlers = [
  // 회원정보 조회
  rest.get("/api" + API.USER.SETTING, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        nickname: "축구도사",
        phoneNumber: "010-1234-5678",
        profileUrl:
          "https://velog.velcdn.com/images/j8won/profile/55917697-2140-40be-ad07-d2d02137f38e/image.jpeg",
      }),
    );
  }),

  // 회원정보 수정
  rest.post("/api" + API.USER.SETTING, (req, res, ctx) => {
    const { password, newPassword, profileImageFile } = req.body;

    if (!password && !newPassword && !profileImageFile) {
      return res(
        ctx.status(400),
        ctx.json({ message: "변경을 요청한 값이 없습니다." }),
      );
    }

    if (password && !newPassword) {
      return res(
        ctx.status(400),
        ctx.json({ message: "새로운 비밀번호를 입력해 주세요" }),
      );
    }

    if (newPassword && !password) {
      return res(
        ctx.status(400),
        ctx.json({ message: "기존 비밀번호를 입력해 주세요" }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({ message: "회원정보가 변경되었습니다" }),
    );
  }),
];
