import PageTitle from "@/components/common/PageTitle.jsx";
import styled from "styled-components";
import { GridTemplate } from "@/styles/CommonStyle.js";
import Button from "@/components/common/button/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import CheckBox from "@/components/common/button/CheckBox.jsx";
import Tabs from "@/components/common/button/Tabs.jsx";
import SearchBar from "@/components/common/SearchBar.jsx";
import routes from "@/constants/routes.js";
import Carousel from "@/components/common/Carousel.jsx";
import FloatButton from "@/components/common/button/FloatButton.jsx";
import SortButtons from "@/components/common/button/SortButtons.jsx";
import CelebInfoGridCard from "@/components/common/CelebInfoGridCard.jsx";
import CountdownBadge from "@/components/common/fund/CountdownBadge.jsx";
import HeartButton from "@/components/common/fund/HeartButton.jsx";
import { useState } from "react";
import BackdropModal from "@/components/common/modal/BackdropModal.jsx";
import FollowButton from "@/components/common/button/FollowButton";

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
      <Button isHoverStyle={false}>PRIMARY</Button>

      <Button styleType={BUTTON_TYPE.SECONDARY}>SECONDARY</Button>
      <Button isHoverStyle={false} styleType={BUTTON_TYPE.SECONDARY}>
        SECONDARY
      </Button>

      <Button styleType={BUTTON_TYPE.TERTIARY}>TERITARY</Button>
      <Button isHoverStyle={false} styleType={BUTTON_TYPE.TERTIARY}>
        TERITARY
      </Button>


      <FollowButton styleType={BUTTON_TYPE.PRIMARY} isHoverStyle={true} celebId={1} isFollowing={false}>팔로우</FollowButton>
      <FollowButton styleType={BUTTON_TYPE.SECONDARY} isHoverStyle={false} celebId={2} isFollowing={true}>팔로잉</FollowButton>




      

      <GridTemplate>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <CelebInfoGridCard>d</CelebInfoGridCard>
      </GridTemplate>
    </>
  );
}

export default Test;
