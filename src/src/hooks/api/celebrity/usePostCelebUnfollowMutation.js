import { useMutation } from "@tanstack/react-query";
import API from "@/constants/API.js";
import celebrityAPI from "@/api/celebrityAPI.js";
import toast from "react-hot-toast";

function usePostCelebUnfollowMutation(handleSuccess) {
  return useMutation(
    [API.CELEBRITY.UNFOLLOW],
    async ({ celebId }) => {
      return celebrityAPI.postCelebUnfollow(celebId);
    },
    {
      onError: () => {
        toast.error("언팔로잉 요청이 실패했습니다");
      },
      onSuccess: handleSuccess,
    },
  );
}

export default usePostCelebUnfollowMutation;
