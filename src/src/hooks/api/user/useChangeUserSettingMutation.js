import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "@/constants/API.js";
import userAPI from "@/api/userAPI.js";
import toast from "react-hot-toast";

function useChangeUserSettingMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    [API.USER.SETTING],
    async (data) => {
      return await userAPI.changeUserSettingByToken(data);
    },
    {
      onSuccess: () => {
        toast.success("성공정으로 회원정보를 변경했습니다.");
        queryClient.invalidateQueries(API.USER.SETTING);
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    },
  );
}

export default useChangeUserSettingMutation;
