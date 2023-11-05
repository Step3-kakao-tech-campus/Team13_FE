import { useMutation } from "@tanstack/react-query";
import API from "@/constants/API.js";
import celebrityAPI from "@/api/celebrityAPI.js";
import toast from "react-hot-toast";

function usePostCelebApplyMutation(handleSuccess) {
  return useMutation(
    [API.CELEBRITY.REGISTER],
    async (celebData) => {
      return celebrityAPI.postCelebApply(celebData);
    },
    {
      onError: (err) => {
        toast.error(err.response.data.message);
      },
      onSuccess: () => {
        toast.success("성공적으로 셀럽신청이 완료되었습니다!");
        handleSuccess();
      },
    },
  );
}

export default usePostCelebApplyMutation;
