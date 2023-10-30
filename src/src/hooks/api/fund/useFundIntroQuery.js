import { useQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";
import toast from "react-hot-toast";

function useFundIntroQuery({ fundId }) {
  return useQuery(
    [API.FUND.INTRODUCTION(fundId)],
    async () => {
      return await FundAPI.getFundIntroductionByFundId(fundId);
    },
    {
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    },
  );
}

export default useFundIntroQuery;
