import { Suspense } from "react";

import CelebDetailInfoSkeleton from "@/components/celebrity-detail/CelebDetailInfoSkeleton.jsx";
import CelebDetailInfo from "@/components/celebrity-detail/CelebDetailInfo";
import InfiniteCelebRelatedFund from "@/components/celebrity-detail/InfiniteCelebRelatedFund.jsx";
import InfiniteFundInfoLoader from "@/components/fund-list/InfiniteFundInfo.loader.jsx";
import { ErrorBoundary } from "react-error-boundary";

function CelebrityDetailPage() {
  return (
    <>
      <Suspense fallback={<CelebDetailInfoSkeleton />}>
        <CelebDetailInfo />
      </Suspense>

      <ErrorBoundary
        fallback={<div>해당 셀럽 관련 펀딩을 조회할 수 없습니다</div>}
      >
        <Suspense fallback={<InfiniteFundInfoLoader />}>
          <InfiniteCelebRelatedFund sortType={""} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default CelebrityDetailPage;
