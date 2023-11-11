import { GridTemplate } from "@/styles/CommonStyle";
import SimpleCelebCard from "@/components/celebrity/SimpleCelebCard.jsx";
import useSimpleCelebInfoQuery from "@/hooks/api/celebrity/useSimpleCelebInfoQuery.js";

function SimpleCelebList() {
  const { data } = useSimpleCelebInfoQuery();

  console.log(data);

  return (
    <GridTemplate style={{ marginBottom: "1.75rem" }}>
      {data?.map((celeb, index) => (
        <SimpleCelebCard
          key={index}
          profileUrl={celeb.profileUrl}
          celebId={celeb.celebId}
          celebName={celeb.celebName}
          followerNum={celeb.followerNum}
          isFollowing={celeb.isFollowing}
        />
      ))}
    </GridTemplate>
  );
}

export default SimpleCelebList;
