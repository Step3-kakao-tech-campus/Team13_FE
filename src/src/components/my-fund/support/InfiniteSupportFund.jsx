import { useRef } from "react";
import { GridTemplate } from "@/styles/CommonStyle.js";

import useInfiniteSupportFundQuery from "@/hooks/api/my-fund/useInfiniteSupportFundQuery.js";
import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import { FundInfoDto } from "@/api/dto/fund.dto.js";

import FundInfoGridCard from "@/components/fund/FundInfoGridCard.jsx";
import InfiniteFundInfoLoader from "@/components/fund-list/InfiniteFundInfo.loader.jsx";

/**
 * My펀딩 후원한 펀딩목록 컴포넌트
 */

function InfiniteSupportFund() {
  const loaderRef = useRef();

  const { data: infiniteSupportFundData, fetchNextPage } =
    useInfiniteSupportFundQuery();

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  const mapInfoToFundInfoDto = (info) => {
    return new FundInfoDto({
      fundId: info?.postId,
      fundTitle: info?.title,
      thumbnailUrl: info?.thumbnail,
      targetDate: info?.deadline,
      targetMoney: info?.targetPrice,
      paymentAmount: info?.paymentAmount,
      celebrityName: info?.celebName,
      celebrityProfileUrl: info?.celebImg,
      organizerName: info?.nickname,
    });
  };

  return (
    <>
      <GridTemplate>
        {infiniteSupportFundData?.pages?.map((page) =>
          page?.data?.response?.content?.map((info, index) => (
            <FundInfoGridCard key={index} {...mapInfoToFundInfoDto(info)} />
          )),
        )}
      </GridTemplate>
      <InfiniteFundInfoLoader
        loaderRef={loaderRef}
        style={
          infiniteSupportFundData?.pages?.at(-1)?.data?.response?.lastPage && {
            display: "none",
          }
        }
      />
    </>
  );
}

export default InfiniteSupportFund;
