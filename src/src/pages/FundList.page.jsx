import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import MainLayout from "@/components/common/template/MainLayout.jsx";
import SearchBar from "@/components/common/SearchBar.jsx";
import SortButtons from "@/components/common/button/SortButtons.jsx";
import FundInfoGridCard from "@/components/fund/FundInfoGridCard.jsx";
import { GridTemplate, Title } from "@/styles/CommonStyle.js";
import routes from "@/constants/routes.js";
import PageTitle from "@/components/common/PageTitle.jsx";
import FloatButton from "@/components/common/button/FloatButton.jsx";

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

  const sonnyFundInfo = {
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
    isInUserWishList: true,
  };

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

          <SortButtons
            sortTypeArray={[
              { key: "마감임박순", func: () => {} },
              { key: "최근등록순", func: () => {} },
            ]}
          />
        </Styled.TopBar>

        <GridTemplate>
          {new Array(10).fill(sonnyFundInfo).map((info, index) => (
            <FundInfoGridCard
              key={index}
              fundId={info.fundId}
              fundTitle={info.fundTitle}
              thumbnailUrl={info.thumbnailUrl}
              targetDate={info.targetDate}
              targetMoney={info.targetMoney}
              currentMoney={info.currentMoney}
              celebrityId={info.celebrityId}
              celebrityProfileUrl={info.celebrityProfileUrl}
              celebrityName={info.celebrityName}
              organizerId={info.organizerId}
              organizerName={info.organizerName}
              isInUserWishList={info.isInUserWishList}
            />
          ))}
        </GridTemplate>

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
