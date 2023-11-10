import { useMutation } from "@tanstack/react-query";
import API from "@/constants/API.js";
import fundAPI from "@/api/fundAPI.js";
import toast from "react-hot-toast";

function usePostFundLikeMutation(handleSuccess) {
  return useMutation(
    [API.FUND.LIKE],
    async ({ fundId }) => {
      return fundAPI.postFundLike(fundId);
    },
    {
      onError: () => {
        toast.error("좋아요 추가를 실패했습니다");
      },
      onSuccess: handleSuccess,
    },
  );
}

export default usePostFundLikeMutation;
