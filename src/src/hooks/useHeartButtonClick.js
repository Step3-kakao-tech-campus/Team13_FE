import { useCallback, useState } from "react";
import usePostFundLikeMutation from "@/hooks/api/fund/usePostFundLikeMutation.js";
import useDeleteFundLikeMutation from "@/hooks/api/fund/useDeleteFundLikeMutation.js";

function useHeartButtonClick({ fundId, isInUserWishList }) {
  const [isHeartClicked, setIsHeartClicked] = useState(isInUserWishList);

  const { mutate: postLikeMutate } = usePostFundLikeMutation(() =>
    setIsHeartClicked(true),
  );

  const { mutate: deleteLikeMutate } = useDeleteFundLikeMutation(() =>
    setIsHeartClicked(false),
  );

  const handleHeartClick = useCallback(
    (e) => {
      e.stopPropagation();
      if (isHeartClicked) return deleteLikeMutate({ fundId });
      return postLikeMutate({ fundId });
    },
    [fundId, isHeartClicked],
  );

  return { isHeartClicked, handleHeartClick };
}

export default useHeartButtonClick;
