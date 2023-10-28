import styled from "styled-components";

import CelebTextInfo from "@/components/celebrity-detail/celebTextInfo.jsx";
import FollowButton from "@/components/celebrity/FollowButton.jsx";
import { GridTemplate } from "@/styles/CommonStyle";
import CelebProfile from "@/components/celebrity-detail/CelebProfile.jsx";
import CelebRank from "@/components/celebrity-detail/CelebRank.jsx";

const Styled = {
  TextInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

function CelebrityDetailPage() {
  const celebInfo = {
    celebId: 1,
    celebName: "손흥민",
    affiliation: "토트넘",
    celebGender: "남",
    celebCategory: "스포츠",
    profileUrl:
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
    fundInProgressNum: 30,
    totalFundMoney: 35000000,
    followerNum: 10000,
    isFollowing: false,
    rank: {
      follower: 1,
      fundMoney: 3,
    },
  };

  return (
    <>
      <div
        className="셀럽정보"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "6rem 11rem 6.5rem",
          justifyContent: "space-between",
        }}
      >
        <CelebProfile
          celebName={celebInfo.celebName}
          affiliation={celebInfo.affiliation}
          celebCategory={celebInfo.celebCategory}
          celebGender={celebInfo.celebGender}
          profileUrl={celebInfo.profileUrl}
        />

        <CelebRank
          followerRank={celebInfo.rank.follower}
          fundingRank={celebInfo.rank.fundMoney}
        />

        <Styled.TextInfoContainer>
          <FollowButton
            celebId={celebInfo.celebId}
            isFollowing={celebInfo.isFollowing}
            style={{
              padding: "0.8rem 3.25rem",
              fontSize: "1rem",
              position: "absolute",
              top: "10rem",
            }}
          />
          <CelebTextInfo
            fundInProgressNum={celebInfo.fundInProgressNum}
            followerNum={celebInfo.followerNum}
            isFollowing={celebInfo.isFollowing}
            totalFundMoney={celebInfo.totalFundMoney}
          />
        </Styled.TextInfoContainer>
      </div>

      <div className="셀럽관련펀딩정보">
        <div>Tabs</div>
        <GridTemplate>
          <div>셀럽인포카드</div>
          <div>셀럽인포카드</div>
          <div>셀럽인포카드</div>
        </GridTemplate>
      </div>
    </>
  );
}

export default CelebrityDetailPage;
