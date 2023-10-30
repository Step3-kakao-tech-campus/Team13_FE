import { atomWithStorage } from "jotai/utils";

const isAdminAtom = atomWithStorage("isAdmin", false);

export default isAdminAtom;
