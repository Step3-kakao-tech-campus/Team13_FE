import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import celebrityAPI from "@/api/celebrityAPI.js";

function useInfiniteCelebInfoQuery({ keyword, sortType }) {
  return useInfiniteQuery(
    [API.CELEBRITY.LIST, keyword, sortType],
    async ({ pageParam = 0 }) => {
      return celebrityAPI.getCelebInfoList({
        pageIndex: pageParam,
        keyword: keyword,
        sortType: sortType,
      });
    },
    {
      suspense: true,
      getNextPageParam: (lastPage) => {
        if (lastPage?.lastPage) {
          return;
        }

        return lastPage?.currentPage;
      },
    },
  );
}

export default useInfiniteCelebInfoQuery;
