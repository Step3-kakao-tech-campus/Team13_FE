import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";

function useInfiniteComments({ fundId }) {
  return useInfiniteQuery(
    [API.FUND.COMMENT(fundId)],
    async ({ pageIndex = 0 }) => {
      return await FundAPI.getCommentsByFundId({ fundId, pageIndex });
    },
    {
      suspense: true,
      getNextPageParam: (lastPage) => {
        if (lastPage.isLastPage) return;
        return lastPage.currentPage + 1;
      },
    },
  );
}

export default useInfiniteComments;
