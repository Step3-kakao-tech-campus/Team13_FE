import { atomWithStorage } from "jotai/utils";

const refreshTokenAtom = atomWithStorage("refreshToken", "");

export default refreshTokenAtom;
