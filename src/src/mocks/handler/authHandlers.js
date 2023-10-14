import { rest } from "msw";
import API from "@/constants/API.js";

export const authHandlers = [
  rest.post("/api" + API.AUTH.LOGIN, (req, res, ctx) => {
    const { email, password } = req.json();

    if (!email || !password) return res(ctx.status(400));

    return res(
      ctx.status(200),
      ctx.json({ accessToken: "accessToken", refreshToken: "refreshToken" }),
    );
  }),
];
