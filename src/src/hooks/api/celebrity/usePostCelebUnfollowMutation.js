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
      onError: (err) => {
        toast.error(err.response.data.message);
      },
      onSuccess: handleSuccess,
    },
  );
}

export default usePostCelebUnfollowMutation;
