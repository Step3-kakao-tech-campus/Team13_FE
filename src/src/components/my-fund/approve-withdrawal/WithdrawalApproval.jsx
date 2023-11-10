import { Suspense } from "react";
import WithdrawalFundInfo from "@/components/my-fund/approve-withdrawal/WithdrawalFundInfo.jsx";
import WithdrawalFundInfoSkeleton from "@/components/my-fund/approve-withdrawal/WithdrawalFundInfoSkeleton.jsx";

/**
 * My펀딩 출금승인 tab 해당내용
 */

function WithdrawalApproval() {
  return (
    <Suspense fallback={<WithdrawalFundInfoSkeleton />}>
      <WithdrawalFundInfo />
    </Suspense>
  );
}

export default WithdrawalApproval;
