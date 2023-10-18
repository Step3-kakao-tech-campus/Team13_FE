import { setupWorker } from "msw";
import { handlers } from "@/mocks/handlers.js";

export const worker = setupWorker(...handlers);
