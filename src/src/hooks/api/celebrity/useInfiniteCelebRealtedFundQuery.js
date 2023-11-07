import { useInfiniteQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import celebrityAPI from "@/api/celebrityAPI.js";

function useInfiniteCelebRelatedFundQuery({ celebId, sortType }) {
  return useInfiniteQuery(
    [API.CELEBRITY.FUNDING(celebId), sortType],
    async ({ pageParam = 0 }) => {
      return celebrityAPI.getCelebRelatedFund({
        celebId: celebId,
        pageIndex: pageParam,
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

export default useInfiniteCelebRelatedFundQuery;
