import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import myFundAPI from "@/api/myFundAPI.js";

function useInfiniteWithdrawalFundQuery() {
  return useInfiniteQuery(
    [API.MY_FUND.WITHDRAWAL],
    async ({ pageParam = 0 }) => {
      return myFundAPI.getWithdrawlApplyList({
        pageIndex: pageParam,
      });
    },
    {
      suspense: true,
      getNextPageParam: (lastPage) => {
        return lastPage.config.params.pageIndex + 1;
      },
    },
  );
}

export default useInfiniteWithdrawalFundQuery;
