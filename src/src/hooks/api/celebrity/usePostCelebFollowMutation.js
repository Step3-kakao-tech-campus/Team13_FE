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
      onError: (err) => {
        toast.error(err.response.data.message);
      },
      onSuccess: handleSuccess,
    },
  );
}

export default usePostCelebFollowMutation;
