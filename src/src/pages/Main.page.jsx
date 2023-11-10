import styled from "styled-components";
import MainLayout from "@/components/common/template/MainLayout.jsx";
import { Title } from "@/styles/CommonStyle.js";
import SORT_ORDER from "@/constants/SORT_ORDER";
import { Suspense } from "react";
import InfiniteFundInfoLoader from "@/components/fund-list/InfiniteFundInfo.loader";
import InfiniteFundInfo from "@/components/fund-list/InfiniteFundInfo";
import SimpleCelebList from "@/components/celebrity-list/SimpleCelebList";

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
  const sortType = SORT_ORDER.FUND.CLOSER_DEADLINE;

  return (
    <>
      <MainLayout>
        <Styled.Title>추천 셀럽</Styled.Title>

        <SimpleCelebList />

        <Styled.Title>마감 임박한 펀딩</Styled.Title>

        <Suspense fallback={<InfiniteFundInfoLoader />}>
          <InfiniteFundInfo sortType={sortType} />
        </Suspense>
      </MainLayout>
    </>
  );
}

export default MainPage;
