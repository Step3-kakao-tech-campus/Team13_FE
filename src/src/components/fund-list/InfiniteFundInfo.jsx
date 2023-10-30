import { useRef } from "react";
import { PropTypes } from "prop-types";
import { GridTemplate } from "@/styles/CommonStyle.js";
import FundInfoGridCard from "@/components/fund/FundInfoGridCard.jsx";
import useInfiniteFundInfoQuery from "@/hooks/api/fund/useInfiniteFundInfoQuery.js";
import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import InfiniteFundInfoLoader from "@/components/fund-list/InfiniteFundInfo.loader.jsx";
import { FundInfoDto } from "@/api/dto/fund.dto.js";

/**
 * 펀딩 무한 목록 컴포넌트
 * @param {string} keyword 검색 키워드
 * @param {string} sortType 순서
 */

function InfiniteFundInfo({ keyword, sortType }) {
  const loaderRef = useRef();

  const { data: infiniteFundInfoData, fetchNextPage } =
    useInfiniteFundInfoQuery({
      keyword,
      sortType,
    });

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  const mapInfoToFundInfoDto = (info) => {
    return new FundInfoDto({ ...info });
  };

  return (
    <>
      <GridTemplate>
        {infiniteFundInfoData?.pages.map((page) =>
          page?.data?.fundList.map((info, index) => (
            <FundInfoGridCard key={index} {...mapInfoToFundInfoDto(info)} />
          )),
        )}
      </GridTemplate>
      <InfiniteFundInfoLoader loaderRef={loaderRef} />
    </>
  );
}

InfiniteFundInfo.propTypes = {
  keyword: PropTypes.string,
  sortType: PropTypes.string,
};

export default InfiniteFundInfo;
