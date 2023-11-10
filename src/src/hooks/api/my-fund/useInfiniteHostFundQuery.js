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
        return lastPage.config.params.pageIndex + 1;
      },
    },
  );
}

export default useInfiniteHostFundQuery;
