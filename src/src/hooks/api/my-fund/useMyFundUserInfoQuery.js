import { useQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import toast from "react-hot-toast";
import myFundAPI from "@/api/myFundAPI";

function useMyFundUserInfoQuery() {
  return useQuery(
    [API.MY_FUND.NICKNAME],
    async () => {
      return await myFundAPI.getMyFundUserInfoByToken();
    },
    {
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    },
  );
}

export default useMyFundUserInfoQuery;
