import PageTitle from "@/components/common/PageTitle.jsx";
import styled from "styled-components";
import { Suspense } from "react";
import { Title } from "@/styles/CommonStyle";
import FundSupportInfo from "@/components/fund-support/FundSupportInfo.jsx";
import FundSupportInfoSkeleton from "@/components/fund-support/FundSupportInfo.skeleton.jsx";

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
        <Suspense fallback={<FundSupportInfoSkeleton />}>
          <FundSupportInfo />
        </Suspense>
      </Styled.Container>
    </>
  );
}

export default FundSupportPage;
