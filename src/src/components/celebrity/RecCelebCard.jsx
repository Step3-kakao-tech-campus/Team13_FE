import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import FollowButton from "./FollowButton.jsx";
function RecCelebCard({
  celebId,
  celebName,
  profileUrl,
  followerNum,
  isFollowing,
}) {
  return (
    <div>
      {profileUrl ? (
        <img src={profileUrl} alt={`${celebName} 프로필 사진`} />
      ) : (
        <TestAccountIcon size={"100"} />
      )}
      <div>
        <span>{celebName}</span>
        <span>{followerNum || 0}명이 팔로우 중</span>
      </div>
      <FollowButton
        celebId={celebId}
        isFollowing={isFollowing}
        style={{ padding: "6px 8px", fontSize: "14px" }}
      />
    </div>
  );
}

export default RecCelebCard;
