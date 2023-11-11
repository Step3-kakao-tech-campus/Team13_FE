import { useMutation } from "@tanstack/react-query";
import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";
import { useNavigate } from "react-router-dom";
import routes from "@/constants/routes.js";

function usePostFundUpdateMutation({ fundId }) {
  const navigate = useNavigate();
  return useMutation(
    [API.FUND.UPDATE(fundId)],
    async ({ title, content }) => {
      await FundAPI.postUpdateByFundId({ fundId, title, content });
    },
    {
      onSuccess: () => {
        navigate(`${routes.fund}/${fundId}`);
      },
    },
  );
}

export default usePostFundUpdateMutation;
