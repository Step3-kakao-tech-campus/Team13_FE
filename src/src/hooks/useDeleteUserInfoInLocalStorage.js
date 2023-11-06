import { useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import accessTokenAtom from "@/storage/accessToken.atom.js";
import refreshTokenAtom from "@/storage/refreshToken.atom.js";
import userProfileImageUrlAtom from "@/storage/userProfileImageUrl.atom.js";
import isAdminAtom from "@/storage/isAdmin.atom.js";
import routes from "@/constants/routes.js";
import userNicknameAtom from "@/storage/userNickname.atom.js";

function useDeleteUserInfoInLocalStorage() {
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setRefreshToken = useSetAtom(refreshTokenAtom);
  const setProfileImageUrl = useSetAtom(userProfileImageUrlAtom);
  const setIsAdmin = useSetAtom(isAdminAtom);
  const setUserNickname = useSetAtom(userNicknameAtom);
  const navigate = useNavigate();

  return () => {
    setAccessToken("");
    setRefreshToken("");
    setProfileImageUrl("");
    setIsAdmin(false);
    setUserNickname("");
    navigate(routes.home, { replace: true });
  };
}

export default useDeleteUserInfoInLocalStorage;
