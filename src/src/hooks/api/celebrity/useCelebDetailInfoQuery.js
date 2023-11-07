import { useQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import celebrityAPI from "@/api/celebrityAPI.js";

function useCelebDetailInfoQuery({ celebId }) {
  return useQuery(
    [API.CELEBRITY.DETAIL(celebId)],
    async () => {
      return await celebrityAPI.getCelebDetailInfo(celebId);
    },
    {
      suspense: true,
    },
  );
}

export default useCelebDetailInfoQuery;
