import PageTitle from "@/components/common/PageTitle.jsx";
import styled from "styled-components";
import { GridTemplate } from "@/styles/CommonStyle.js";
import Button from "@/components/common/button/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import CheckBox from "@/components/common/button/CheckBox.jsx";
import Tabs from "@/components/common/button/TabButtons.jsx";
import SearchBar from "@/components/common/SearchBar.jsx";
import routes from "@/constants/routes.js";
import Carousel from "@/components/common/Carousel.jsx";
import FloatButton from "@/components/common/button/FloatButton.jsx";
import SortButtons from "@/components/common/button/SortButtons.jsx";
import CelebInfoGridCard from "@/components/celebrity/CelebInfoGridCard.jsx";
import CountdownBadge from "@/components/fund/CountdownBadge.jsx";
import HeartButton from "@/components/fund/HeartButton.jsx";
import { useState } from "react";
import BackdropModal from "@/components/common/modal/BackdropModal.jsx";
import FollowButton from "@/components/celebrity/FollowButton.jsx";
import SimpleCelebCard from "@/components/celebrity/SimpleCelebCard.jsx";
import CelebInfoGridCardSkeleton from "@/components/celebrity/CelebInfoGridCardSkeleton.jsx";

const Styled = {
  GridExample: styled.article`
    background-color: palevioletred;
    height: 10rem;
  `,
};

function Test() {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sortTypeArray = [
    {
      key: "마감임박순",
      func: () => {
        console.log("마감임박순");
      },
    },
    {
      key: "최근등록순",
      func: () => {
        console.log("최근등록순");
      },
    },
  ];

  const tabInfoArray = [
    {
      title: "팔로잉",
      func: () => {
        console.log("팔로잉");
      },
    },
    {
      title: "찜한 목록",
      func: () => {
        console.log("찜한 목록");
      },
    },
    {
      title: "펀딩 내역",
      func: () => {
        console.log("펀딩 내역");
      },
    },
  ];

  return (
    <>
      <PageTitle />
      <Carousel />

      <Button onClick={() => setIsModalOpen(true)}>모달창</Button>
      {isModalOpen && (
        <BackdropModal setOpen={setIsModalOpen}>
          <h1>안녕</h1>
        </BackdropModal>
      )}

      <HeartButton
        isActive={isHeartClicked}
        onClick={() => setIsHeartClicked((prev) => !prev)}
      />

      <CountdownBadge target={"2023-10-08 17:53:00"} />
      <CountdownBadge target={"2023-10-08 18:00:00"} />
      <CountdownBadge target={"2023-10-08 18:30:00"} />
      <CountdownBadge target={"2023-10-09 00:16:00"} />
      <CountdownBadge target={"2023-11-09 23:16:00"} />
      <CountdownBadge target={"2024-11-05 23:16:00"} />

      <SortButtons sortTypeArray={sortTypeArray} />

      <SearchBar placeholder={"펀딩 검색바"} uri={routes.fund} />
      <SearchBar placeholder={"셀럽 검색바"} uri={routes.celebrity} />

      <FloatButton
        onClick={() => {
          console.log("셀럽 신청");
        }}
      >
        셀럽 신청
      </FloatButton>
      <CheckBox id={1} />
      <CheckBox id={"hi"} />

      <Tabs tabInfoArray={tabInfoArray} />
      <Button style={{ margin: "1rem" }}>PRIMARY</Button>
      <Button useHoverStyle={false}>PRIMARY</Button>

      <Button styleType={BUTTON_TYPE.SECONDARY}>SECONDARY</Button>
      <Button useHoverStyle={false} styleType={BUTTON_TYPE.SECONDARY}>
        SECONDARY
      </Button>

      <Button styleType={BUTTON_TYPE.TERTIARY}>TERITARY</Button>
      <Button useHoverStyle={false} styleType={BUTTON_TYPE.TERTIARY}>
        TERITARY
      </Button>

      <FollowButton celebId={1} isFollowing={false} />

      <FollowButton celebId={2} isFollowing={true} />

      <GridTemplate>
        <CelebInfoGridCard
          celebId="sonny"
          celebName="손흥민"
          profileUrl={
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg"
          }
          fundInProgressNum={30}
          followerNum={1000}
          isFollowing={false}
          totalFundMoney={35000000}
        />

        <CelebInfoGridCard
          celebId="joowon"
          celebName="경주원"
          fundInProgressNum={100}
          followerNum={820200}
          isFollowing={true}
          totalFundMoney={1000000}
        />

        <SimpleCelebCard
          celebId="sonny"
          celebName="손흥민"
          followerNum={1000}
          isFollowing={false}
        />
        <SimpleCelebCard
          profileUrl={
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg"
          }
          celebId="sonny"
          celebName="손흥민"
          followerNum={1000}
          isFollowing={false}
        />
        <SimpleCelebCard
          profileUrl={
            "https://i.namu.wiki/i/sfvk_xnvWlwCiFo3X6cdfzf621AlwLjGRZ88bIcrIt99EwxqOQVGGp7gMEH6gllADZl1kLJdIeJD3Ooq4LOYOg.webp"
          }
          celebId="kingin"
          celebName="이강인"
          followerNum={900}
          isFollowing={false}
        />
        <SimpleCelebCard
          profileUrl={
            "https://i.namu.wiki/i/Ji8IqBWQ5rblmmB1u6C9gUytAe1cx8r4jtooUCyqjdHUdO5hg3SEHoNfl5z8euRheGdgcHh2wdwHUj9N0PG-Jw.webp"
          }
          celebId="woo"
          celebName="정우영"
          followerNum={500}
          isFollowing={false}
        />

        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <CelebInfoGridCardSkeleton />
        <CelebInfoGridCardSkeleton />
        <CelebInfoGridCardSkeleton />
      </GridTemplate>
    </>
  );
}

export default Test;
