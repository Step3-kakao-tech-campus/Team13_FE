import useWithdrawalFundQuery from "@/hooks/api/my-fund/useWithdrawalFundQuery.js";
import { MyFundWithdrawalInfoDto } from "@/api/dto/myFund.dto.js";

import WithdrawalFundCard from "@/components/my-fund/approve-withdrawal/WithdrawalFundCard.jsx";

/**
 * My펀딩 - 출금 승인대기 무한 목록 카드
 */

function InfiniteWithdrawalFundInfo() {
  const { data: infiniteWithdrawalFundData } = useWithdrawalFundQuery();

  const mapInfoToWithdrawlFundDto = (info) => {
    return new MyFundWithdrawalInfoDto({
      withdrawalId: info?.withdrawalId,
      withdrawalAmount: info?.withdrawalAmount,
      usage: info?.usage,
      fundId: info?.postId,
      fundTitle: info?.title,
      thumbnailUrl: info?.thumbnail,
      organizerId: info?.userId,
      organizerName: info?.nickname,
      organizerProfileUrl: info?.profileImage,
    });
  };

  return (
    <>
      {infiniteWithdrawalFundData?.map((info, index) => (
        <WithdrawalFundCard key={index} {...mapInfoToWithdrawlFundDto(info)} />
      ))}
    </>
  );
}
export default InfiniteWithdrawalFundInfo;
