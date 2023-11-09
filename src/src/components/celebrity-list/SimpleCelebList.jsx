import { GridTemplate } from "@/styles/CommonStyle";
import SimpleCelebCard from "../celebrity/SimpleCelebCard.jsx";
import useSimpleCelebInfoQuery from "@/hooks/api/celebrity/useSimpleCelebInfoQuery.js";

function SimpleCelebList() {
  const sonnyCelebInfo = {
    celebId: 1,
    celebName: "손흥민",
    profileUrl:
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
    fundInProgressNum: 30,
    totalFundMoney: 35000000,
    followerNum: 10000,
    isFollowing: false,
    rank: 1,
  };

  // 요 부분을 어떻게 처리할지가 고민입니다!
  const { data: simpleCelebListData } = useSimpleCelebInfoQuery();

  return (
    <GridTemplate style={{ marginBottom: "1.75rem" }}>
      {new Array(3).fill(sonnyCelebInfo).map((info, index) => (
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
