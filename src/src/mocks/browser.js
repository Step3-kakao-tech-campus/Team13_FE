import { setupWorker } from "msw";
import { handlers } from "@/mocks/handler/index.js";

export const worker = setupWorker(...handlers);
