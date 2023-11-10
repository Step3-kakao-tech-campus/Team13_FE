import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import celebrityAPI from "@/api/celebrityAPI.js";

function useInfiniteCelebInfoQuery({ keyword, sortType }) {
  return useInfiniteQuery(
    [API.CELEBRITY.LIST, keyword, sortType],
    async ({ cursorId = 0 }) => {
      return celebrityAPI.getCelebInfoList({
        cursorId: cursorId,
        keyword: keyword,
        sortType: sortType,
      });
    },
    {
      suspense: true,
      getNextPageParam: (lastPage) => {
        if (lastPage?.data?.response?.lastPage) {
          return;
        }

        return lastPage?.data?.response?.content?.at(-1).id;
        // return lastPage.config.params.pageIndex + 1;
      },
    },
  );
}

export default useInfiniteCelebInfoQuery;
