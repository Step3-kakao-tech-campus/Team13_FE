import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "@/constants/API.js";
import myFundAPI from "@/api/myFundAPI";
import { toast } from "react-hot-toast";

function usePostWithdrawalApprovalMutation(handleSuccess) {
  const queryClient = useQueryClient();

  return useMutation(
    [API.MY_FUND.APPROVAL],
    async ({ postId, withdrawalId }) => {
      return myFundAPI.postWithdrawalApproval({ postId, withdrawalId });
    },
    {
      onError: (err) => {
        toast.error(err.response.data.message);
      },
      onSuccess: () => {
        toast.success("성공적으로 출금승인이 완료되었습니다!");
        handleSuccess();
        queryClient.invalidateQueries({ queryKey: [API.MY_FUND.WITHDRAWAL] });
      },
    },
  );
}

export default usePostWithdrawalApprovalMutation;
