import styled from "styled-components";
import { Suspense } from "react";
import FundInfo from "@/components/withdraw/FundInfo.jsx";
import FundInfoSkeleton from "@/components/withdraw/FundInfo.skeleton.jsx";
import WithdrawForm from "@/components/withdraw/WithdrawForm.jsx";

const Styled = {
  Container: styled.div`
    padding: 2rem 0;
    margin: 0 auto;
    max-width: 50rem;
  `,
};

function WithdrawPage() {
  return (
    <Styled.Container>
      <Suspense fallback={<FundInfoSkeleton />}>
        <FundInfo />
      </Suspense>

      <WithdrawForm />
    </Styled.Container>
  );
}

export default WithdrawPage;
