import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import fundAPI from "@/api/fundAPI.js";

function useInfiniteFundInfoQuery({ keyword, sortType }) {
  return useInfiniteQuery(
    [API.FUND.LIST, keyword, sortType],
    async ({ pageParam = 0 }) => {
      return fundAPI.getFundInfoList({
        pageIndex: pageParam,
        keyword: keyword,
        sortType: sortType,
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

export default useInfiniteFundInfoQuery;
