import { useMutation } from "@tanstack/react-query";
import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";
import toast from "react-hot-toast";

function useDeleteFundLikeMutation(handleSuccess) {
  return useMutation(
    [API.FUND.LIKE],
    async ({ fundId }) => {
      return await FundAPI.deleteFundLike(fundId);
    },
    {
      onError: () => {
        toast.error("좋아요 취소를 실패했습니다");
      },
      onSuccess: handleSuccess,
    },
  );
}

export default useDeleteFundLikeMutation;
