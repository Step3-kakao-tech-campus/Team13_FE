import PageTitle from "@/components/common/PageTitle.jsx";
import styled from "styled-components";
import { Suspense } from "react";
import { Title } from "@/styles/CommonStyle";
import FundInfo from "@/components/fund-support/FundInfo.jsx";

const Styled = {
  Container: styled.section`
    padding-top: 2rem;
  `,
};

function FundSupportPage() {
  return (
    <>
      <PageTitle title={"후원하기"} />
      <Styled.Container>
        <Title>펀딩 후원하기</Title>
        <Suspense fallback={<div>loading</div>}>
          <FundInfo />
        </Suspense>
      </Styled.Container>
    </>
  );
}

export default FundSupportPage;
