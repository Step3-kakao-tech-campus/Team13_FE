import { useMutation } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import authAPI from "@/api/authAPI.js";
import API from "@/constants/API.js";
import routes from "@/constants/routes.js";

import accessTokenAtom from "@/storage/accessToken.atom.js";
import refreshTokenAtom from "@/storage/refreshToken.atom.js";
import userProfileImageUrlAtom from "@/storage/userProfileImageUrl.atom.js";
import isAdminAtom from "@/storage/isAdmin.atom.js";
import userNicknameAtom from "@/storage/userNickname.atom.js";

function useLogInMutation() {
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setRefreshToken = useSetAtom(refreshTokenAtom);
  const setUserProfileUrl = useSetAtom(userProfileImageUrlAtom);
  const setIsAdmin = useSetAtom(isAdminAtom);
  const setUserNickname = useSetAtom(userNicknameAtom);
  const navigate = useNavigate();

  return useMutation(
    [API.AUTH.LOGIN],
    async ({ email, password }) => {
      return await authAPI.postLogin({ email, password });
    },
    {
      onSuccess: (data) => {
        const {
          accessToken,
          refreshToken,
          profileImageUrl,
          isAdmin,
          nickname,
        } = data;

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setUserProfileUrl(profileImageUrl);
        setIsAdmin(isAdmin);
        setUserNickname(nickname);

        toast.success("로그인에 성공했습니다");
        navigate(routes.home, { replace: true });
      },
      onError: () => {
        toast.error("로그인에 실패했습니다");
      },
    },
  );
}

export default useLogInMutation;
