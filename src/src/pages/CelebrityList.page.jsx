import styled from "styled-components";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Title } from "@/styles/CommonStyle.js";
import routes from "@/constants/routes.js";

import MainLayout from "@/components/common/template/MainLayout.jsx";
import SearchBar from "@/components/common/SearchBar.jsx";
import SortButtons from "@/components/common/button/SortButtons.jsx";
import PageTitle from "@/components/common/PageTitle.jsx";
import FloatButton from "@/components/common/button/FloatButton.jsx";
import CelebApplyModal from "@/components/celebrity-list/CelebApplyModal.jsx";
import InfiniteCelebInfo from "@/components/celebrity-list/InfiniteCelebInfo";
import InfiniteCelebInfoLoader from "@/components/celebrity-list/InfiniteCelebInfo.loader";

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

function CelebrityListPage() {
  const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [keyword, setKeyword] = useState(searchParams.get("keyword"));

  useEffect(() => {
    setKeyword(searchParams.get("keyword"));
  }, [searchParams]);

  const [sortType, setSortType] = useState("펀딩총액순");

  const celebListSortTypeArray = [
    {
      key: "펀딩총액순",
      func: () => {
        setSortType("펀딩총액순");
      },
    },
    {
      key: "팔로워순",
      func: () => {
        setSortType("팔로워순");
      },
    },
  ];

  return (
    <>
      <PageTitle
        title={
          searchParams?.get("keyword")
            ? `${searchParams?.get("keyword")} 셀럽`
            : "셀럽"
        }
      />
      <MainLayout>
        <Styled.Title>셀럽</Styled.Title>
        <SearchBar
          uri={routes.celebrity}
          style={{ margin: "1.25rem 0 2rem" }}
        />

        <Styled.TitleBar>
          <Styled.Title>
            {keyword ? `${keyword} 검색 결과` : "순위"}
          </Styled.Title>
          <SortButtons sortTypeArray={celebListSortTypeArray} />
        </Styled.TitleBar>

        <Suspense fallback={<InfiniteCelebInfoLoader />}>
          <InfiniteCelebInfo keyword={keyword} sortType={sortType} />
        </Suspense>

        <FloatButton onClick={() => setIsModalOpen(true)}>
          셀럽 신청
        </FloatButton>
        {isModalOpen && <CelebApplyModal setOpen={setIsModalOpen} />}
      </MainLayout>
    </>
  );
}

export default CelebrityListPage;
