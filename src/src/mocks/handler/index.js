import { authHandlers } from "@/mocks/handler/authHandlers.js";
import { fundHandlers } from "@/mocks/handler/fundHandlers.js";
import { userHandlers } from "@/mocks/handler/userHandlers.js";
import { celebrityHandlers } from "@/mocks/handler/celebrityHandlers.js";
import { myFundHandlers } from "./myFundHandlers.js";

export const handlers = [
  ...authHandlers,
  ...fundHandlers,
  ...userHandlers,
  ...celebrityHandlers,
  ...myFundHandlers,
];
