import { useQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import myFundAPI from "@/api/myFundAPI.js";

function useWithdrawalFundQuery() {
  return useQuery(
    [API.MY_FUND.WITHDRAWAL],
    async ({ pageParam = 0 }) => {
      return myFundAPI.getWithdrawlApplyList({
        pageIndex: pageParam,
      });
    },
    {
      suspense: true,
    },
  );
}

export default useWithdrawalFundQuery;
