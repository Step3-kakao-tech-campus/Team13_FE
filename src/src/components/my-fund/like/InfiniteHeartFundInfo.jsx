import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import { FundInfoDto } from "@/api/dto/fund.dto.js";
import { GridTemplate } from "@/styles/CommonStyle.js";
import FundInfoGridCard from "@/components/fund/FundInfoGridCard.jsx";
import InfiniteFundInfoLoader from "@/components/fund-list/InfiniteFundInfo.loader.jsx";
import useInfiniteHeartFundQuery from "@/hooks/api/my-fund/useInfiniteHeartFundQuery.js";

function InfiniteHeartFundInfo() {
  const loaderRef = useRef();

  // const { data: infiniteFundInfoData, fetchNextPage } =
  //   useInfiniteFundInfoQuery({
  //     keyword,
  //     sortType,
  //   });

  const { data: infiniteHeartFundInfoData, fetchNextPage } =
    useInfiniteHeartFundQuery();
  const isLastPage = infiniteHeartFundInfoData?.pages?.at(-1)?.lastPage;

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  const mapInfoToFundInfoDto = (info) => {
    return new FundInfoDto({
      fundId: info.postId,
      fundTitle: info.title,
      thumbnailUrl: info.thumbnail,
      targetDate: info.deadline,
      targetMoney: info.targetPrice,
      currentMoney: info.currentAmount,
      celebrityId: info.celebId,
      celebrityName: info.celebrity,
      celebrityProfileUrl: info.celebImg,
      organizerId: info.writerId,
      organizerName: info.writer,
      isInUserWishList: info.heart,
    });
  };

  return (
    <>
      <GridTemplate>
        {infiniteHeartFundInfoData?.pages.map((page) =>
          page?.content?.map((info, index) => (
            <FundInfoGridCard key={index} {...mapInfoToFundInfoDto(info)} />
          )),
        )}
      </GridTemplate>

      <InfiniteFundInfoLoader
        loaderRef={loaderRef}
        style={
          isLastPage && {
            display: "none",
          }
        }
      />
    </>
  );
}

export default InfiniteHeartFundInfo;
