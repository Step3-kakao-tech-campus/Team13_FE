import { useRef } from "react";
import { PropTypes } from "prop-types";
import { GridTemplate } from "@/styles/CommonStyle.js";
import { CelebInfoDto } from "@/api/dto/celebrity.dto";

import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import useInfiniteCelebInfoQuery from "@/hooks/api/celebrity/useInfiniteCelebInfoQuery";
import CelebInfoGridCard from "@/components/celebrity/CelebInfoGridCard.jsx";
import InfiniteCelebInfoLoader from "./InfiniteCelebInfo.loader.jsx";

/**
 * 셀럽 무한 목록 컴포넌트
 * @param {string} keyword 검색 키워드
 * @param {string} sortType 순서
 */

// TODO: 제대로 동작하는지 다시 확인해야함
function InfiniteCelebInfo({ keyword, sortType }) {
  const loaderRef = useRef();

  const {
    data: infiniteCelebInfoData,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteCelebInfoQuery({
    keyword,
    sortType,
  });

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  const mapInfoToCelebInfoDto = (index, info) => {
    return new CelebInfoDto({
      celebId: info?.celebId,
      celebName: info?.celebName,
      profileUrl: info?.profileImage,
      totalFundMoney: info?.fundingAmount,
      fundInProgressNum: info?.ongoingFundingCount,
      followerNum: info?.followerCount,
      isFollowing: info?.following,
      rank: index + 1,
    });
  };

  return (
    <>
      <GridTemplate style={{ marginBottom: "3rem" }}>
        {infiniteCelebInfoData?.pages.map((page) =>
          page?.content?.map((info, index) => (
            <CelebInfoGridCard
              key={index}
              {...mapInfoToCelebInfoDto(index, info)}
            />
          )),
        )}
      </GridTemplate>
      <InfiniteCelebInfoLoader
        loaderRef={loaderRef}
        style={{ display: !isFetchingNextPage && "none" }}
      />
    </>
  );
}

InfiniteCelebInfo.propTypes = {
  keyword: PropTypes.string,
  sortType: PropTypes.string,
};

export default InfiniteCelebInfo;
