import { useMutation } from "@tanstack/react-query";
import API from "@/constants/API.js";
import celebrityAPI from "@/api/celebrityAPI.js";
import toast from "react-hot-toast";

function usePostCelebFollowMutation(handleSuccess) {
  return useMutation(
    [API.CELEBRITY.FOLLOW],
    async ({ celebId }) => {
      return celebrityAPI.postCelebFollow(celebId);
    },
    {
      onError: () => {
        toast.error("팔로우 요청이 실패했습니다");
      },
      onSuccess: handleSuccess,
    },
  );
}

export default usePostCelebFollowMutation;
