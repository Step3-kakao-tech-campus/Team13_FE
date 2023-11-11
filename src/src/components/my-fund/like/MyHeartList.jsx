import { Suspense } from "react";
import InfiniteFundInfoLoader from "../../fund-list/InfiniteFundInfo.loader";
import InfiniteHeartFundInfo from "@/components/my-fund/like/InfiniteHeartFundInfo.jsx";

function MyHeartList() {
  return (
    <Suspense fallback={<InfiniteFundInfoLoader />}>
      <InfiniteHeartFundInfo />
    </Suspense>
  );
}

export default MyHeartList;
