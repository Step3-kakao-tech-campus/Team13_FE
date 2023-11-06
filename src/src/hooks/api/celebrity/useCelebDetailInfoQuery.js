import { useQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import celebrityAPI from "@/api/celebrityAPI.js";

function useCelebDetailInfoQuery({ celebId }) {
  console.log("커스텀으로 넘어온 셀럽아이디", celebId);
  return useQuery(
    [API.CELEBRITY.DETAIL(celebId), celebId],
    async () => {
      return await celebrityAPI.getCelebDetailInfo(celebId);
    },
    {
      suspense: true,
    },
  );
}

export default useCelebDetailInfoQuery;
