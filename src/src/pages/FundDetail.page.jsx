import styled from "styled-components";
import { useState } from "react";
import InfoContainer from "@/components/fund-detail/InfoContainer.jsx";
import DynamicDetailRender from "@/components/fund-detail/DynamicDetailRender.jsx";
import TABS from "@/constants/TABS.js";
import Tabs from "@/components/common/button/Tabs.jsx";

const Styled = {
  Container: styled.section`
    padding: 2rem 0;
    width: 100%;
  `,
  InfoWrap: styled.article`
    padding-bottom: 2rem;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    border-bottom: ${({ theme }) => theme.border.strong};

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  `,
  Thumbnail: styled.img`
    width: calc(100% - 22.5rem - 2rem);
    aspect-ratio: 16/10;
    border-radius: 0.25rem;
    object-fit: cover;

    @media screen and (max-width: 767px) {
      width: 100%;
    }
  `,
  DetailWrap: styled.article`
    padding-top: 2rem;
  `,
};

function FundDetailPage() {
  const [selectedTab, setSelectedTab] = useState(TABS.FUND_DETAIL.INTRO);

  const tabInfoArray = Object.keys(TABS.FUND_DETAIL).map((key) => {
    return {
      title: TABS.KOREAN[key],
      func: () => {
        setSelectedTab(key);
      },
    };
  });

  return (
    <Styled.Container>
      <Styled.InfoWrap>
        <Styled.Thumbnail
          src="https://ichef.bbci.co.uk/news/640/cpsprodpb/4118/production/_119546661_gettyimages-1294130887.jpg"
          alt="펀딩 대표 사진"
        />

        <InfoContainer />
      </Styled.InfoWrap>

      <Styled.DetailWrap>
        <Tabs tabInfoArray={tabInfoArray} style={{ paddingBottom: "1rem" }} />
        <DynamicDetailRender type={selectedTab} />
      </Styled.DetailWrap>
    </Styled.Container>
  );
}

export default FundDetailPage;
