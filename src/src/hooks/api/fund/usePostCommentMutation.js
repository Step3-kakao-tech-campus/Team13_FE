import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function usePostCommentMutation(fundId) {
  const queryClient = useQueryClient();
  return useMutation(
    [API.FUND.COMMENT(fundId)],
    async (comment) => {
      return await FundAPI.postCommentByFundId(fundId, comment);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(API.FUND.COMMENT(fundId));
      },
    },
  );
}

export default usePostCommentMutation;
