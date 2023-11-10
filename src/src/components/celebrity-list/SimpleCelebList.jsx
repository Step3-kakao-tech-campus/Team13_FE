import { GridTemplate } from "@/styles/CommonStyle";
import SimpleCelebCard from "../celebrity/SimpleCelebCard.jsx";
import useSimpleCelebInfoQuery from "@/hooks/api/celebrity/useSimpleCelebInfoQuery.js";

function SimpleCelebList() {
  // 요 부분을 어떻게 처리할지가 고민입니다!
  const { data } = useSimpleCelebInfoQuery();

  console.log(data);

  return (
    <GridTemplate style={{ marginBottom: "1.75rem" }}>
      {data?.map((info, index) => (
        <SimpleCelebCard
          key={index}
          profileUrl={info.profileUrl}
          celebId={info.celebId}
          celebName={info.celebName}
          followerNum={info.followerNum}
          isFollowing={info.isFollowing}
        />
      ))}
    </GridTemplate>
  );
}

export default SimpleCelebList;
