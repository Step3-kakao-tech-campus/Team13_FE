import { atomWithStorage } from "jotai/utils";

const userProfileImageUrlAtom = atomWithStorage("userProfileImageUrl", null);

export default userProfileImageUrlAtom;
