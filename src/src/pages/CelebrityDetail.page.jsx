import { Suspense, useState } from "react";

import CelebDetailInfoSkeleton from "@/components/celebrity-detail/CelebDetailInfoSkeleton.jsx";
import CelebDetailInfo from "@/components/celebrity-detail/CelebDetailInfo";
import Tabs from "@/components/common/button/TabButtons.jsx";
import InfiniteCelebRelatedFund from "@/components/celebrity-detail/InfiniteCelebRelatedFund.jsx";
import InfiniteFundInfoLoader from "@/components/fund-list/InfiniteFundInfo.loader.jsx";

function CelebrityDetailPage() {
  const [sortType, setSortType] = useState(0);

  const tabInfoArray = [
    {
      title: "진행중 펀딩",
      func: () => setSortType(0),
    },
    {
      title: "마감된 펀딩",
      func: () => setSortType(1),
    },
  ];

  return (
    <>
      <Suspense fallback={<CelebDetailInfoSkeleton />}>
        <CelebDetailInfo />
      </Suspense>

      <Tabs tabInfoArray={tabInfoArray} style={{ paddingBottom: "1rem" }} />

      <Suspense fallback={<InfiniteFundInfoLoader />}>
        <InfiniteCelebRelatedFund sortType={sortType} />
      </Suspense>
    </>
  );
}

export default CelebrityDetailPage;
