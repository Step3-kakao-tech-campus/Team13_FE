import { Suspense } from "react";
import WithdrawalFundInfo from "@/components/my-fund/approve-withdrawal/WithdrawalFundInfo.jsx";
import InfiniteWithdrawInfoLoader from "@/components/my-fund/approve-withdrawal/InfiniteWithdrawInfo.loader.jsx";

/**
 * My펀딩 출금승인 tab 해당내용
 */

function WithdrawalApproval() {
  return (
    <Suspense fallback={<InfiniteWithdrawInfoLoader />}>
      <WithdrawalFundInfo />
    </Suspense>
  );
}

export default WithdrawalApproval;
