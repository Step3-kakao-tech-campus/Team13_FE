import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import fundAPI from "@/api/fundAPI.js";

function useInfiniteWithdrawInfoQuery({ fundId }) {
  return useInfiniteQuery(
    [API.FUND.WITHDRAW(fundId)],
    async ({ pageParam = 0 }) => {
      return fundAPI.getFundWithdrawInfo({ fundId, pageIndex: pageParam });
    },
    {
      suspense: true,
      getNextPageParam: (lastPage) => {
        return lastPage.config.params.pageIndex + 1;
      },
    },
  );
}

export default useInfiniteWithdrawInfoQuery;
