import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import routes from "@/constants/routes.js";
import { useNavigate } from "react-router-dom";

function usePostCommentMutation(fundId) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(
    [API.FUND.COMMENT(fundId)],
    async (comment) => {
      return await FundAPI.postCommentByFundId(fundId, comment);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(API.FUND.COMMENT(fundId));
      },
      onError: () => {
        toast.error("답글 작성에 실패했습니다");

        if (!localStorage.getItem("accessToken")) {
          navigate(routes.signIn);
        }
      },
    },
  );
}

export default usePostCommentMutation;
