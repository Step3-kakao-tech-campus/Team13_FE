import { useMutation } from "@tanstack/react-query";
import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";
import { useNavigate } from "react-router-dom";

function usePostFundUpdateMutation({ fundId }) {
  const navigate = useNavigate();
  return useMutation(
    [API.FUND.UPDATE(fundId)],
    async ({ title, content }) => {
      await FundAPI.postUpdateByFundId({ fundId, title, content });
    },
    {
      onSuccess: () => {
        navigate(API.FUND.DETAIL(fundId));
      },
    },
  );
}

export default usePostFundUpdateMutation;
