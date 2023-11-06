import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import CelebTextInfo from "@/components/celebrity-detail/CelebTextInfo.jsx";
import CelebProfile from "@/components/celebrity-detail/CelebProfile.jsx";
import CelebRank from "@/components/celebrity-detail/CelebRank.jsx";
import Tabs from "@/components/common/button/TabButtons.jsx";
import FundInfoGridCard from "@/components/fund/FundInfoGridCard.jsx";

import { GridTemplate } from "@/styles/CommonStyle.js";
import useCelebDetailInfoQuery from "@/hooks/api/celebrity/useCelebDetailInfoQuery";

const Styled = {
  CelebInfoContainer: styled.div`
    padding: 2rem calc((100% - 60rem) / 2);
  `,

  CelebInfoBottomBox: styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  `,

  ProfileImage: styled.img`
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 0.25rem;
  `,

  TextInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

function CelebrityDetailPage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { celebId } = useParams();
  console.log("셀럽아이디", celebId);
  const { data } = useCelebDetailInfoQuery({ celebId: celebId });
  console.log(data);

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
      <Styled.CelebInfoContainer>
        <CelebProfile
          celebName={data?.celebName}
          celebGroup={data?.celebGroup}
          celebCategory={data?.celebCategory}
          celebGender={data?.celebGender}
          celebId={data?.celebId}
          isFollowing={data?.isFollowing}
        />

        <Styled.CelebInfoBottomBox>
          <Styled.ProfileImage
            src={data?.profileUrl}
            alt={`${data?.celebName}의 프로필 사진`}
          />

          <CelebRank
            followerRank={data?.rank.follower}
            fundingRank={data?.rank.fundMoney}
          />

          <CelebTextInfo
            fundInProgressNum={data?.fundInProgressNum}
            followerNum={data?.followerNum}
            isFollowing={data?.isFollowing}
            totalFundMoney={data?.totalFundMoney}
          />
        </Styled.CelebInfoBottomBox>
      </Styled.CelebInfoContainer>

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
    </>
  );
}

export default CelebrityDetailPage;
