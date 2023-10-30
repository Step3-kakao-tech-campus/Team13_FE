import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import CelebInfoGridCard from "@/components/celebrity/CelebInfoGridCard.jsx";
import FloatButton from "@/components/common/button/FloatButton.jsx";
import SortButtons from "@/components/common/button/SortButtons.jsx";
import PageTitle from "@/components/common/PageTitle.jsx";
import routes from "@/constants/routes.js";
import MainLayout from "@/components/common/template/MainLayout.jsx";
import { GridTemplate, Title } from "@/styles/CommonStyle.js";
import CelebApplyModal from "@/components/celebrity-list/CelebApplyModal.jsx";
import SimpleCelebCard from "@/components/celebrity/SimpleCelebCard";
import FundInfoGridCard from "@/components/fund/FundInfoGridCard";

const Styled = {
  Title: styled(Title)`
    width: fit-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  TitleBar: styled.div`
    padding-bottom: 1.75rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

function MainPage() {
  const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const [keyword, setKeyword] = useState(searchParams.get("keyword"));

  useEffect(() => {
    setKeyword(searchParams.get("keyword"));
  }, [searchParams]);

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

  return (
    <>
      <MainLayout>
        <Styled.TitleBar>
          <Styled.Title>추천 셀럽</Styled.Title>
        </Styled.TitleBar>

        <GridTemplate style={{ margin: "1.25rem 0 2rem" }}>
          {new Array(3).fill(sonnyCelebInfo).map((info, index) => (
            <SimpleCelebCard
              key={index}
              celebId={info.celebId}
              celebName={info.celebName}
              profileUrl={info.profileUrl}
              fundInProgressNum={info.fundInProgressNum}
              followerNum={info.followerNum}
              isFollowing={info.isFollowing}
              totalFundMoney={info.totalFundMoney}
              rank={index + 1}
            />
          ))}
        </GridTemplate>

        <Styled.TitleBar>
          <Styled.Title>마감 임박한 펀딩</Styled.Title>
        </Styled.TitleBar>

        <GridTemplate>
          {new Array(6).fill(sonnyCelebInfo).map((info, index) => (
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
        {isModalOpen && <CelebApplyModal setOpen={setIsModalOpen} />}
      </MainLayout>
    </>
  );
}

export default MainPage;
