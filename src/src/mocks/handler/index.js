import { authHandlers } from "@/mocks/handler/authHandlers.js";
import { fundHandlers } from "@/mocks/handler/fundHandlers.js";

export const handlers = [...authHandlers, ...fundHandlers];
