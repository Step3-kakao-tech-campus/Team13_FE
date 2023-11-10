import { useQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import toast from "react-hot-toast";
import myFundAPI from "@/api/myFundAPI";

function useFollowingCelebQuery() {
  return useQuery(
    [API.MY_FUND.FOLLOW],
    async () => {
      return await myFundAPI.getFollowingCelebByToken();
    },
    {
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    },
  );
}

export default useFollowingCelebQuery;
