import { GridTemplate } from "@/styles/CommonStyle";
import SimpleCelebCard from "../celebrity/SimpleCelebCard.jsx";

function MyFollowingList() {
  const sonnyCelebInfo = {
    profileUrl:
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",

    celebId: "sonny",
    celebName: "손흥민",
    followerNum: 1000,
    isFollowing: false,
  };
  return (
    <GridTemplate>
      {new Array(6).fill(sonnyCelebInfo).map((info, index) => (
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

export default MyFollowingList;
