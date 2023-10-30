import { atomWithStorage } from "jotai/utils";

const accessTokenAtom = atomWithStorage("accessToken", null);

export default accessTokenAtom;
