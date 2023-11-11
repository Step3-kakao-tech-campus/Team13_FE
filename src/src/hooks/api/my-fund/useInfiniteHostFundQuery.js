import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import myFundAPI from "@/api/myFundAPI.js";

function useInfiniteHostFundQuery() {
  return useInfiniteQuery(
    [API.MY_FUND.HOST],
    async ({ pageParam = 0 }) => {
      return myFundAPI.getHostFundListByToken({
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

export default useInfiniteHostFundQuery;
