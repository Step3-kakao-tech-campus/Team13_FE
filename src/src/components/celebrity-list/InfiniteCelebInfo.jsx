import { useRef } from "react";
import { GridTemplate } from "@/styles/CommonStyle.js";
import { CelebInfoDto } from "@/api/dto/celebrity.dto";

import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import useInfiniteCelebInfoQuery from "@/hooks/api/celebrity/useInfiniteCelebInfoQuery";
import CelebInfoGridCard from "@/components/celebrity/CelebInfoGridCard.jsx";

function InfiniteCelebInfo({ keyword, sortType }) {
  const loaderRef = useRef();

  const { data: infiniteCelebInfoData, fetchNextPage } =
    useInfiniteCelebInfoQuery({
      keyword,
      sortType,
    });

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  const mapInfoToCelebInfoDto = (info) => {
    return new CelebInfoDto({ ...info });
  };

  return (
    <>
      <GridTemplate>
        {infiniteCelebInfoData?.pages.map((page) =>
          page?.data?.celebList.map((info, index) => (
            <CelebInfoGridCard key={index} {...mapInfoToCelebInfoDto(info)} />
          )),
        )}
      </GridTemplate>
      {/* 로더 자리 */}
    </>
  );
}
export default InfiniteCelebInfo;
