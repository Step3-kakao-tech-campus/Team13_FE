import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";

function useInfiniteUpdate({ fundId }) {
  return useInfiniteQuery(
    [API.FUND.UPDATE(fundId)],
    async ({ pageParam = 0 }) => {
      return await FundAPI.getUpdateByFundId({ fundId, cursor: pageParam });
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.isLastPage) return;
        return lastPage.cursor;
      },
    },
  );
}

export default useInfiniteUpdate;
