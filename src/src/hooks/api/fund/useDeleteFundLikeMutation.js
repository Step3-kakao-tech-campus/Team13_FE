import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";
import toast from "react-hot-toast";
import useErrorNavigate from "@/hooks/useErrorNavigate.js";

function useDeleteFundLikeMutation({ fundId, handleSuccess }) {
  const { handleError } = useErrorNavigate();
  const queryClient = useQueryClient();

  return useMutation(
    [API.FUND.LIKE(fundId)],
    async () => {
      return await FundAPI.deleteFundLike(fundId);
    },
    {
      onError: (error) => {
        handleError(error);
        toast.error("좋아요 취소를 실패했습니다");
      },
      onSuccess: () => {
        handleSuccess();
        queryClient.invalidateQueries([API.FUND.LIST], {
          refetchType: "all",
        });
      },
    },
  );
}

export default useDeleteFundLikeMutation;
