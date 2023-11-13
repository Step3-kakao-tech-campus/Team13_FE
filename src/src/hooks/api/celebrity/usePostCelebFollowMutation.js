import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import API from "@/constants/API.js";
import celebrityAPI from "@/api/celebrityAPI.js";
import useErrorNavigate from "@/hooks/useErrorNavigate.js";

function usePostCelebFollowMutation({ celebId, handleSuccess }) {
  const { handleError } = useErrorNavigate();
  const queryClient = useQueryClient();

  return useMutation(
    [API.CELEBRITY.FOLLOW(celebId)],
    async () => {
      return celebrityAPI.postCelebFollow(celebId);
    },
    {
      onError: (error) => {
        handleError(error);
        toast.error("팔로우 요청이 실패했습니다");
      },
      onSuccess: async () => {
        handleSuccess();

        await queryClient.invalidateQueries({
          queryKey: [API.FUND.LIST],
        });
        await queryClient.invalidateQueries({
          queryKey: [API.CELEBRITY.LIST],
        });
      },
    },
  );
}

export default usePostCelebFollowMutation;
