import { useQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";

function useFundIntroQuery({ fundId }) {
  return useQuery([API.FUND.INTRODUCTION(fundId)], async () => {
    return await FundAPI.getFundIntroductionByFundId(fundId);
  });
}

export default useFundIntroQuery;
