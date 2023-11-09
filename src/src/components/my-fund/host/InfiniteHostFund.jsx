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
    return new FundInfoDto({ ...info });
  };

  return (
    <>
      <GridTemplate>
        {infiniteHostFundData?.pages.map((page) =>
          page?.data?.hostFundList.map((info, index) => (
            <FundInfoGridCard key={index} {...mapInfoToFundInfoDto(info)} />
          )),
        )}
      </GridTemplate>
      <InfiniteFundInfoLoader loaderRef={loaderRef} />
    </>
  );
}

export default InfiniteHostFund;
