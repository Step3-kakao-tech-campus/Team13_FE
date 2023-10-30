import { authHandlers } from "@/mocks/handler/authHandlers.js";
import { fundHandlers } from "@/mocks/handler/fundHandlers.js";
import { userHandlers } from "@/mocks/handler/userHandlers.js";

export const handlers = [...authHandlers, ...fundHandlers, ...userHandlers];
