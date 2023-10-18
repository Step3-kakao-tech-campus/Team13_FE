import { rest } from "msw";

export const handlers = [
  rest.post("/api/login", (ctx, res, req) => {
    return res(ctx.status(200));
  }),
  rest.get("/user", null),
];
