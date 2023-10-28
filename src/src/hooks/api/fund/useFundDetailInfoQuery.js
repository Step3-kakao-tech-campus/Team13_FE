import { useQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";

function useFundDetailInfoQuery({ fundId }) {
  return useQuery(
    [API.FUND.DETAIL(fundId)],
    async () => {
      return await FundAPI.getDetailInfoByFundId(fundId);
    },
    {
      suspense: true,
    },
  );
}

export default useFundDetailInfoQuery;
