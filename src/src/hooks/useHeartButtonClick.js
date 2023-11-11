import { useCallback, useState } from "react";
import usePostFundLikeMutation from "@/hooks/api/fund/usePostFundLikeMutation.js";
import useDeleteFundLikeMutation from "@/hooks/api/fund/useDeleteFundLikeMutation.js";

function useHeartButtonClick({ fundId, isInUserWishList }) {
  const [isHeartClicked, setIsHeartClicked] = useState(isInUserWishList);

  const { mutate: postLikeMutate } = usePostFundLikeMutation({
    fundId,
    handleSuccess: () => setIsHeartClicked(true),
  });

  const { mutate: deleteLikeMutate } = useDeleteFundLikeMutation({
    fundId,
    handleSuccess: () => setIsHeartClicked(false),
  });

  const handleHeartClick = useCallback(
    (e) => {
      e.stopPropagation();
      if (isHeartClicked) return deleteLikeMutate();
      return postLikeMutate();
    },
    [fundId, isHeartClicked],
  );

  return { isHeartClicked, handleHeartClick };
}

export default useHeartButtonClick;
