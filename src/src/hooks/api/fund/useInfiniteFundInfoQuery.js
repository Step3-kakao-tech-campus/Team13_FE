import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import fundAPI from "@/api/fundAPI.js";

function useInfiniteFundInfoQuery({ keyword, sortType }) {
  return useInfiniteQuery(
    [API.FUND.LIST, keyword, sortType],
    async ({ postId = 10 }) => {
      return fundAPI.getFundInfoList({
        postId: postId,
        keyword: keyword,
        sortType: sortType,
      });
    },
    {
      suspense: true,
      getNextPageParam: (lastPage) => {
        if (lastPage.data.response.lastPage) return;
        return lastPage.data.response.content.at(-1).postId;
      },
    },
  );
}

export default useInfiniteFundInfoQuery;
