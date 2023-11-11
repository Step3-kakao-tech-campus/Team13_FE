import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";

function useFundWithdrawEvidenceImageMutation({ fundId, withdrawId }) {
  const queryClient = useQueryClient();

  return useMutation(
    [API.FUND.WITHDRAW_IMAGE({ fundId, withdrawId })],
    async ({ image }) => {
      const imageForm = new FormData();
      imageForm.append("image", image);

      await FundAPI.postFundWithdrawEvidenceImage({
        fundId,
        withdrawId,
        imageForm,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(API.FUND.WITHDRAW(fundId));
      },
    },
  );
}

export default useFundWithdrawEvidenceImageMutation;
