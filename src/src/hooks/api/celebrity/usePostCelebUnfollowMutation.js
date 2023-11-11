import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "@/constants/API.js";
import celebrityAPI from "@/api/celebrityAPI.js";
import toast from "react-hot-toast";
import useErrorNavigate from "@/hooks/useErrorNavigate.js";

function usePostCelebUnfollowMutation({ celebId, handleSuccess }) {
  const { handleError } = useErrorNavigate();
  const queryClient = useQueryClient();

  return useMutation(
    [API.CELEBRITY.UNFOLLOW(celebId)],
    async () => {
      return celebrityAPI.postCelebUnfollow(celebId);
    },
    {
      onError: (error) => {
        handleError(error);
        toast.error("언팔로잉 요청이 실패했습니다");
      },
      onSuccess: () => {
        handleSuccess();
        queryClient.invalidateQueries(
          [API.FUND.LIST, API.CELEBRITY.LIST, API.CELEBRITY.RECOMMEND],
          {
            refetchType: "all",
          },
        );
      },
    },
  );
}

export default usePostCelebUnfollowMutation;
