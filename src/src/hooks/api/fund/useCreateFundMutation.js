import { useMutation } from "@tanstack/react-query";
import API from "@/constants/API.js";
import FundAPI from "@/api/fundAPI.js";
import toast from "react-hot-toast";

function useCreateFundMutation() {
  return useMutation(
    [API.FUND.WRITE],
    async ({
      celebId,
      deadline,
      title,
      targetPrice,
      introduction,
      imageFile,
    }) => {
      return await FundAPI.createFund({
        celebId,
        deadline,
        title,
        targetPrice,
        introduction,
        imageFile,
      });
    },
    {
      onSuccess: () => {
        toast.success("성공적으로 펀딩을 주최했습니다!");
      },
    },
  );
}

export default useCreateFundMutation;
