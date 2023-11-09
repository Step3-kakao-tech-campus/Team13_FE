import styled from "styled-components";
import MainLayout from "@/components/common/template/MainLayout.jsx";
import { GridTemplate, Title } from "@/styles/CommonStyle.js";
import SimpleCelebCard from "@/components/celebrity/SimpleCelebCard";
import FundInfoGridCard from "@/components/fund/FundInfoGridCard";
import SORT_ORDER from "@/constants/SORT_ORDER";

const Styled = {
  Title: styled(Title)`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 1.75rem;
  `,
};

function MainPage() {
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

  const sortType = SORT_ORDER.FUND.CLOSER_DEADLINE;

  return (
    <>
      <MainLayout>
        <Styled.Title>추천 셀럽</Styled.Title>

        <GridTemplate style={{ marginBottom: "1.75rem" }}>
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

        <Styled.Title>마감 임박한 펀딩</Styled.Title>

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
              isInUserWishList={fundInfo.isInUserWishList}
            />
          ))}
        </GridTemplate>
      </MainLayout>
    </>
  );
}

export default MainPage;
