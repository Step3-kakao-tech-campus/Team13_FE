import { useRef } from "react";
import { GridTemplate } from "@/styles/CommonStyle.js";

import useInfiniteHostFundQuery from "@/hooks/api/my-fund/useInfiniteHostFundQuery.js";
import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import { FundInfoDto } from "@/api/dto/fund.dto.js";

import FundInfoGridCard from "@/components/fund/FundInfoGridCard.jsx";
import InfiniteFundInfoLoader from "@/components/fund-list/InfiniteFundInfo.loader.jsx";

/**
 * My펀딩 주최한 펀딩목록 컴포넌트
 */

function InfiniteHostFund() {
  const loaderRef = useRef();

  const { data: infiniteHostFundData, fetchNextPage } =
    useInfiniteHostFundQuery();

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  const mapInfoToFundInfoDto = (info) => {
    return new FundInfoDto({
      fundId: info?.postId,
      fundTitle: info?.title,
      thumbnailUrl: info?.thumbnail,
      targetDate: info?.deadline,
      targetMoney: info.targetPrice,
      currentMoney: info?.currentAmount,
      celebrityId: info?.celebId,
      celebrityName: info?.celebrity,
      celebrityProfileUrl: info?.celebImg,
      organizerId: info?.writerId,
      organizerName: info?.writer,
    });
  };

  return (
    <>
      <GridTemplate>
        {infiniteHostFundData?.pages.map((page) =>
          page?.data?.response?.content?.map((info, index) => (
            <FundInfoGridCard key={index} {...mapInfoToFundInfoDto(info)} />
          )),
        )}
      </GridTemplate>
      <InfiniteFundInfoLoader
        loaderRef={loaderRef}
        style={
          infiniteHostFundData?.pages?.at(-1)?.data?.response?.lastPage && {
            display: "none",
          }
        }
      />
    </>
  );
}

export default InfiniteHostFund;
