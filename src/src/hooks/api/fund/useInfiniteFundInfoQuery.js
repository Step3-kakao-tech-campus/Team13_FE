import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import fundAPI from "@/api/fundAPI.js";

function useInfiniteFundInfoQuery({ keyword, sortType }) {
  return useInfiniteQuery(
    [API.FUND.LIST, keyword, sortType],
    async ({ pageIndex = 0 }) => {
      return fundAPI.getFundInfoList({
        pageIndex: pageIndex,
        keyword: keyword,
        sortType: sortType,
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

export default useInfiniteFundInfoQuery;
