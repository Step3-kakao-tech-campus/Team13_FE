import { useQuery } from "@tanstack/react-query";
import FundAPI from "@/api/fundAPI.js";
import toast from "react-hot-toast";
import API from "@/constants/API.js";

function useFundBalanceQuery({ fundId }) {
  return useQuery(
    [API.FUND.BALANCE(fundId)],
    async () => {
      return await FundAPI.getFundBalance(fundId);
    },
    {
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    },
  );
}

export default useFundBalanceQuery;
