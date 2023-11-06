import { useCallback, useState } from "react";
import usePostCelebFollowMutation from "@/hooks/api/celebrity/usePostCelebFollowMutation.js";
import usePostCelebUnfollowMutation from "@/hooks/api/celebrity/usePostCelebUnfollowMutation.js";

function useFollowButtonClick({ celebId, isFollowing }) {
  const [isFollowingButton, setIsFollowingButton] = useState(!isFollowing);

  const { mutate: postFollowMutate } = usePostCelebFollowMutation(() =>
    // 팔로우 시 팔로우 버튼은 안보임(팔로잉버튼 노출)
    setIsFollowingButton(false),
  );

  const { mutate: postUnfollowMutate } = usePostCelebUnfollowMutation(() =>
    // 언팔로우 시 팔로우 버튼 보임
    setIsFollowingButton(true),
  );

  const handleFollowClick = useCallback(
    (e) => {
      e.stopPropagation();
      if (isFollowingButton) return postFollowMutate({ celebId });
      return postUnfollowMutate({ celebId });
    },
    [celebId, isFollowingButton],
  );

  return { isFollowingButton, handleFollowClick };
}

export default useFollowButtonClick;
