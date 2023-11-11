import { useRef } from "react";
import { PropTypes } from "prop-types";

import { CelebRelatedFundDto } from "@/api/dto/celebrity.dto";
import { GridTemplate } from "@/styles/CommonStyle.js";
import useInfiniteCelebRelatedFundQuery from "@/hooks/api/celebrity/useInfiniteCelebRealtedFundQuery.js";
import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";

import FundInfoGridCard from "@/components/fund/FundInfoGridCard.jsx";
import InfiniteFundInfoLoader from "@/components/fund-list/InfiniteFundInfo.loader.jsx";
import { useParams } from "react-router-dom";

/**
 * 셀럽관련 펀딩목록 컴포넌트
 * @param {number} sortType 순서
 */

function InfiniteCelebRelatedFund({ sortType }) {
  const loaderRef = useRef();
  const { celebId } = useParams();

  const { data: infiniteCelebFundData, fetchNextPage } =
    useInfiniteCelebRelatedFundQuery({
      celebId,
      sortType,
    });

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  const mapInfoToCelebFundDto = (info) => {
    return new CelebRelatedFundDto({
      celebrityId: celebId,
      celebrityName: info?.celebName,
      celebrityProfileUrl: "",
      fundId: info?.postId,
      fundTitle: info?.title,
      thumbnailUrl: info?.thumbnail,
      targetMoney: info?.targetPrice,
      targetDate: "2023-12-31",
      currentMoney: 1000000,
      organizerId: 123,
      organizerName: "joo",
    });
  };

  return (
    <>
      <GridTemplate>
        {infiniteCelebFundData?.pages.map((page) =>
          page?.content?.map((info, index) => (
            <FundInfoGridCard key={index} {...mapInfoToCelebFundDto(info)} />
          )),
        )}
      </GridTemplate>

      <InfiniteFundInfoLoader
        loaderRef={loaderRef}
        style={
          infiniteCelebFundData?.pages.at(-1).lastPage && { display: "none" }
        }
      />
    </>
  );
}

InfiniteCelebRelatedFund.propTypes = {
  sortType: PropTypes.number,
};

export default InfiniteCelebRelatedFund;
