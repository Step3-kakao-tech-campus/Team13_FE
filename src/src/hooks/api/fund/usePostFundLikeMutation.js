import { useMutation } from "@tanstack/react-query";
import API from "@/constants/API.js";
import fundAPI from "@/api/fundAPI.js";
import toast from "react-hot-toast";

function usePostFundLikeMutation(handleSuccess) {
  return useMutation(
    [API.FUND.LIKE],
    async ({ fundId }) => {
      return fundAPI.postFundLike(fundId);
    },
    {
      onError: (err) => {
        toast.error(err.response.data.message);
      },
      onSuccess: handleSuccess,
    },
  );
}

export default usePostFundLikeMutation;
