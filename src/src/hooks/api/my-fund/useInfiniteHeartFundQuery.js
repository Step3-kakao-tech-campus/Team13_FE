import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import myFundAPI from "@/api/myFundAPI.js";

function useInfiniteHeartFundQuery() {
  return useInfiniteQuery(
    [API.MY_FUND.LIKE],
    async ({ pageParam = 0 }) => {
      return await myFundAPI.getLikeFund({ pageIndex: pageParam });
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.lastPage) return;
        return lastPage.currentPage;
      },
    },
  );
}
export default useInfiniteHeartFundQuery;
