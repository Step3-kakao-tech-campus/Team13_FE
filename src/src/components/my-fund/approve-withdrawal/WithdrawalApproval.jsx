import { Suspense } from "react";
import InfiniteWithdrawalFundInfo from "@/components/my-fund/approve-withdrawal/InfiniteWithdrawalFundInfo.jsx";
import InfiniteWithdrawalFundInfoLoader from "@/components/my-fund/approve-withdrawal/InfiniteWithdrawalFundInfo.loader.jsx";
import { ErrorBoundary } from "react-error-boundary";
/**
 * My펀딩 출금승인 tab 해당내용
 */

function WithdrawalApproval() {
  return (
    <ErrorBoundary
      fallback={<div>현재 출금 승인이 신청된 펀딩이 없습니다</div>}
    >
      <Suspense fallback={<InfiniteWithdrawalFundInfoLoader />}>
        <InfiniteWithdrawalFundInfo />
      </Suspense>
    </ErrorBoundary>
  );
}

export default WithdrawalApproval;
