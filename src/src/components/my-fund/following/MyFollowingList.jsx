import { GridTemplate } from "@/styles/CommonStyle";
import SimpleCelebCard from "../../celebrity/SimpleCelebCard.jsx";
import useFollowingCelebQuery from "@/hooks/api/my-fund/useFollowingCelebQuery.js";

function MyFollowingList() {
  const { data } = useFollowingCelebQuery();

  return (
    <GridTemplate>
      {data?.map((celeb, index) => (
        <SimpleCelebCard
          key={index}
          profileUrl={celeb.profileUrl}
          celebId={celeb.celebId}
          celebName={celeb.celebName}
          followerNum={celeb.followerNum}
        />
      ))}
    </GridTemplate>
  );
}

export default MyFollowingList;
