import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import myFundAPI from "@/api/myFundAPI.js";

function useInfiniteSupportFundQuery() {
  return useInfiniteQuery(
    [API.MY_FUND.SUPPORT],
    async ({ pageParam = 0 }) => {
      return myFundAPI.getSupportFundListByToken({
        pageIndex: pageParam,
      });
    },
    {
      suspense: true,
      getNextPageParam: (lastPage) => {
        if (lastPage.data.response.lastPage) return;
        return lastPage.data.response.currentPage;
      },
    },
  );
}

export default useInfiniteSupportFundQuery;
