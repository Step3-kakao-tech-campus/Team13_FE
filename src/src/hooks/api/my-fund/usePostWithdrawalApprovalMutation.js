import { useMutation } from "@tanstack/react-query";
import API from "@/constants/API.js";
import myFundAPI from "@/api/myFundAPI";
import { toast } from "react-hot-toast";

function usePostWithdrawalApprovalMutation(handleSuccess) {
  return useMutation(
    [API.MY_FUND.APPROVAL],
    async (id) => {
      return myFundAPI.postWithdrawalApproval(id);
    },
    {
      onError: (err) => {
        toast.error(err.response.data.message);
      },
      onSuccess: () => {
        toast.success("성공적으로 출금승인이 완료되었습니다!");
        handleSuccess();
      },
    },
  );
}

export default usePostWithdrawalApprovalMutation;
