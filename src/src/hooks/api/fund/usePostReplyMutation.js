import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";
import toast from "react-hot-toast";
import routes from "@/constants/routes.js";
import { useNavigate } from "react-router-dom";

function usePostReplyMutation({ fundId, commentId }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(
    [API.FUND.COMMENT_REPLY({ fundId, commentId })],
    async (content) => {
      return await FundAPI.postReplyByCommentId({ fundId, commentId, content });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(API.FUND.COMMENT_REPLY(fundId));
      },
      onError: () => {
        toast.error("댓글 작성에 실패했습니다");

        if (!localStorage.getItem("accessToken")) {
          navigate(routes.signIn);
        }
      },
    },
  );
}

export default usePostReplyMutation;
