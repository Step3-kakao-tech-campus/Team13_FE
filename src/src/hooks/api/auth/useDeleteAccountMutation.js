import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import authAPI from "@/api/authAPI.js";
import API from "@/constants/API.js";
import useDeleteUserInfoInLocalStorage from "@/hooks/useDeleteUserInfoInLocalStorage.js";

function useDeleteAccountMutation() {
  const deleteUserInfoInLocalStorage = useDeleteUserInfoInLocalStorage();

  return useMutation(
    [API.AUTH.DELETE_ACCOUNT],
    async () => {
      return await authAPI.deleteAccountByToken();
    },
    {
      onSuccess: () => {
        deleteUserInfoInLocalStorage();
        toast.success("계정을 성공적으로 탈퇴했습니다.");
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    },
  );
}

export default useDeleteAccountMutation;
