import { useQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import myFundAPI from "@/api/myFundAPI.js";

function useWithdrawalFundQuery() {
  return useQuery(
    [API.MY_FUND.WITHDRAWAL],
    async () => {
      return myFundAPI.getWithdrawlApplyList();
    },
    {
      suspense: true,
    },
  );
}

export default useWithdrawalFundQuery;
