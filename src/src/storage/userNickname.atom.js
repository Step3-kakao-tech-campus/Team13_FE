import { atomWithStorage } from "jotai/utils";

const userNicknameAtom = atomWithStorage("userNickname", null);

export default userNicknameAtom;
