import { useState } from "react";
import styled from "styled-components";

import CelebTextInfo from "@/components/celebrity-detail/celebTextInfo.jsx";
import FollowButton from "@/components/celebrity/FollowButton.jsx";
import CelebProfile from "@/components/celebrity-detail/CelebProfile.jsx";
import CelebRank from "@/components/celebrity-detail/CelebRank.jsx";
import Tabs from "@/components/common/button/TabButtons.jsx";
import FundInfoGridCard from "@/components/fund/FundInfoGridCard";
import { GridTemplate } from "@/styles/CommonStyle";

const Styled = {
  TextInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

function CelebrityDetailPage() {
  const [selectedTab, setSelectedTab] = useState(0);

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
      fundMoney: 4,
    },
  };

  const fundInfo = {
    fundId: 1,
    fundTitle:
      "손흥민 주장된 기념 지하철 광고 🎉🎉 축구중독자가 책임지고 펀딩합니다 ❤️‍🔥",
    thumbnailUrl:
      "https://ichef.bbci.co.uk/news/640/cpsprodpb/4118/production/_119546661_gettyimages-1294130887.jpg",
    targetDate: "2023-12-17",
    targetMoney: "3000000",
    currentMoney: "2340000",
    celebrityId: "sonny",
    celebrityName: "손흥민",
    celebrityProfileUrl:
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
    organizerId: "soccer123",
    organizerName: "축구도사",
  };

  const tabInfoArray = [
    {
      title: "진행중 펀딩",
      func: () => setSelectedTab(0),
    },
    {
      title: "마감된 펀딩",
      func: () => setSelectedTab(1),
    },
  ];

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
        <Tabs tabInfoArray={tabInfoArray} style={{ paddingBottom: "1rem" }} />
        <GridTemplate>
          {new Array(6).fill(fundInfo).map((info, index) => (
            <FundInfoGridCard
              key={index}
              fundId={fundInfo.fundId}
              fundTitle={fundInfo.fundTitle}
              thumbnailUrl={fundInfo.thumbnailUrl}
              targetDate={fundInfo.targetDate}
              targetMoney={fundInfo.targetMoney}
              currentMoney={fundInfo.currentMoney}
              celebrityId={fundInfo.celebrityId}
              celebrityProfileUrl={fundInfo.celebrityProfileUrl}
              celebrityName={fundInfo.celebrityName}
              organizerId={fundInfo.organizerId}
              organizerName={fundInfo.organizerName}
            />
          ))}
        </GridTemplate>
      </div>
    </>
  );
}

export default CelebrityDetailPage;
