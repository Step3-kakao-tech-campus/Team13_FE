import { useMutation } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import authAPI from "@/api/authAPI.js";
import API from "@/constants/API.js";
import routes from "@/constants/routes.js";
import accessTokenAtom from "@/storage/accessToken.atom.js";
import refreshTokenAtom from "@/storage/refreshToken.atom.js";

function useLogInMutation() {
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setRefreshToken = useSetAtom(refreshTokenAtom);
  const navigate = useNavigate();

  return useMutation(
    [API.QUERY_KEY.POST_LOGIN],
    async ({ email, password }) => {
      return await authAPI.postLogin({ email, password });
    },
    {
      onSuccess: ({ data }) => {
        const { accessToken, refreshToken } = data;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        toast.success("로그인에 성공했습니다");
        navigate(routes.home);
      },
      onError: () => {
        toast.error("로그인에 실패했습니다");
      },
    },
  );
}

export default useLogInMutation;
