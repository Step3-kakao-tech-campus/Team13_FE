import styled from "styled-components";
import { Suspense } from "react";
import FundInfo from "@/components/withdraw/FundInfo.jsx";
import FundInfoSkeleton from "@/components/withdraw/FundInfo.skeleton.jsx";

const Styled = {
  Container: styled.div`
    padding: 2rem 0;
  `,
};

function WithdrawPage() {
  return (
    <Styled.Container>
      <Suspense fallback={<FundInfoSkeleton />}>
        <FundInfo />
      </Suspense>
    </Styled.Container>
  );
}

export default WithdrawPage;
