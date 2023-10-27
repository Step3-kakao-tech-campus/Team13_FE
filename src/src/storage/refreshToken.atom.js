import { atomWithStorage } from "jotai/utils";

const refreshTokenAtom = atomWithStorage("refreshToken", null);

export default refreshTokenAtom;
