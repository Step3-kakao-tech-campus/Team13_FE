import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "@/constants/API.js";
import myFundAPI from "@/api/myFundAPI";
import { toast } from "react-hot-toast";

function usePostWithdrawalRejectionMutation(handleSuccess) {
  const queryClient = useQueryClient();
  return useMutation(
    [API.MY_FUND.REJECTION],
    async ({ postId, withdrawalId }) => {
      return myFundAPI.postWithdrawalRejection({ postId, withdrawalId });
    },
    {
      onError: (err) => {
        toast.error(err.response.data.message);
      },
      onSuccess: () => {
        toast.success("출금승인이 거부되었습니다!");
        handleSuccess();
        queryClient.invalidateQueries({ queryKey: [API.MY_FUND.WITHDRAWAL] });
      },
    },
  );
}

export default usePostWithdrawalRejectionMutation;
