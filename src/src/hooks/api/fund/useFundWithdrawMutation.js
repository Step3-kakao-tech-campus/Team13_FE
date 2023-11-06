import { useMutation } from "@tanstack/react-query";
import API from "@/constants/API.js";
import fundAPI from "@/api/fundAPI.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import routes from "@/constants/routes.js";

function useFundWithdrawMutation({ fundId }) {
  const navigate = useNavigate();
  return useMutation(
    [API.FUND.WITHDRAW(fundId)],
    async ({ usage, depositAccount, amount }) => {
      return await fundAPI.postFundWithdraw({
        fundId,
        usage,
        depositAccount,
        amount,
      });
    },
    {
      onError: (error) => {
        toast.error(error.response.data.message);
      },
      onSuccess: () => {
        navigate(`${routes.fund}/${fundId}`);
      },
    },
  );
}

export default useFundWithdrawMutation;
