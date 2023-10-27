import styled from "styled-components";
import { useEffect, useState, Suspense } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Title } from "@/styles/CommonStyle.js";
import routes from "@/constants/routes.js";
import SORT_ORDER from "@/constants/SORT_ORDER.js";

import MainLayout from "@/components/common/template/MainLayout.jsx";
import SearchBar from "@/components/common/SearchBar.jsx";
import SortButtons from "@/components/common/button/SortButtons.jsx";
import PageTitle from "@/components/common/PageTitle.jsx";
import FloatButton from "@/components/common/button/FloatButton.jsx";
import InfiniteFundInfo from "@/components/fund-list/InfiniteFundInfo.jsx";
import InfiniteFundInfoLoader from "@/components/fund-list/InfiniteFundInfo.loader.jsx";

const Styled = {
  Title: styled(Title)`
    width: fit-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  TopBar: styled.div`
    padding-bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

function FundListPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(searchParams.get("keyword"));

  useEffect(() => {
    setKeyword(searchParams.get("keyword"));
  }, [searchParams]);

  const [sortType, setSortType] = useState(SORT_ORDER.FUND.CLOSER_DEADLINE);

  const fundListSortTypeArray = [
    SORT_ORDER.FUND.CLOSER_DEADLINE,
    SORT_ORDER.FUND.RECENT_ENROLLMENT,
  ].map((type) => {
    return {
      key: SORT_ORDER.KOREAN[type],
      func: () => {
        setSortType(type);
      },
    };
  });

  return (
    <>
      <PageTitle
        title={
          searchParams?.get("keyword")
            ? `${searchParams?.get("keyword")} 펀딩`
            : "펀딩"
        }
      />
      <MainLayout>
        <Styled.Title style={{ paddingBottom: "2rem" }}>펀딩</Styled.Title>
        <SearchBar uri={routes.fund} style={{ marginBottom: "2rem" }} />

        <Styled.TopBar>
          <Styled.Title>
            {keyword ? `${keyword} 검색 결과` : "모든 펀딩"}
          </Styled.Title>

          <SortButtons sortTypeArray={fundListSortTypeArray} />
        </Styled.TopBar>

        <Suspense fallback={<InfiniteFundInfoLoader />}>
          <InfiniteFundInfo keyword={keyword} sortType={sortType} />
        </Suspense>

        <FloatButton
          onClick={() => {
            navigate(routes.createFund);
          }}
        >
          펀딩 주최
        </FloatButton>
      </MainLayout>
    </>
  );
}

export default FundListPage;
