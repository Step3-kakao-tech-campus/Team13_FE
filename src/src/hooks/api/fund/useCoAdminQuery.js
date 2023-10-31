import { useQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";
import toast from "react-hot-toast";

function useCoAdminQuery({ fundId }) {
  return useQuery(
    [API.FUND.CO_ADMIN(fundId)],
    async () => {
      return await FundAPI.getCoAdminByFundId(fundId);
    },
    {
      suspense: true,
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    },
  );
}

export default useCoAdminQuery;
