import { useRef } from "react";

import useInfiniteWithdrawalFundQuery from "@/hooks/api/my-fund/useInfiniteWithdrawalFundQuery.js";
import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import { MyFundWithdrawalInfoDto } from "@/api/dto/myFund.dto.js";

import InfiniteWithdrawalFundInfoLoader from "@/components/my-fund/approve-withdrawal/InfiniteWithdrawalFundInfo.loader.jsx";
import WithdrawalFundCard from "@/components/my-fund/approve-withdrawal/WithdrawalFundCard.jsx";

/**
 * My펀딩 - 출금 승인대기 무한 목록 카드
 */

function InfiniteWithdrawalFundInfo() {
  const loaderRef = useRef();

  const { data: infiniteWithdrawalFundData, fetchNextPage } =
    useInfiniteWithdrawalFundQuery();

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  const mapInfoToWithdrawlFundDto = (info) => {
    return new MyFundWithdrawalInfoDto({ ...info });
  };

  console.log("데이터 p[0]", infiniteWithdrawalFundData.pages[0]);

  return (
    <>
      {infiniteWithdrawalFundData?.pages.map((page) =>
        page?.data?.withdrawalApplyFundList.map((info, index) => (
          <WithdrawalFundCard
            key={index}
            {...mapInfoToWithdrawlFundDto(info)}
          />
        )),
      )}
      <InfiniteWithdrawalFundInfoLoader loaderRef={loaderRef} />
    </>
  );
}
export default InfiniteWithdrawalFundInfo;
