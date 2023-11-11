import { Suspense } from "react";
import InfiniteWithdrawalFundInfo from "@/components/my-fund/approve-withdrawal/InfiniteWithdrawalFundInfo.jsx";
import InfiniteWithdrawalFundInfoLoader from "@/components/my-fund/approve-withdrawal/InfiniteWithdrawalFundInfo.loader.jsx";
/**
 * My펀딩 출금승인 tab 해당내용
 */

function WithdrawalApproval() {
  return (
    <Suspense fallback={<InfiniteWithdrawalFundInfoLoader />}>
      <InfiniteWithdrawalFundInfo />
    </Suspense>
  );
}

export default WithdrawalApproval;
