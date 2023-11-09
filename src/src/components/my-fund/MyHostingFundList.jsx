import { Suspense } from "react";
import InfiniteFundInfoLoader from "@/components/fund-list/InfiniteFundInfo.loader.jsx";
import InfiniteHostFund from "@/components/my-fund/InfiniteHostFund.jsx";

function MyHostingFundList() {
  return (
    <Suspense fallback={<InfiniteFundInfoLoader />}>
      <InfiniteHostFund />
    </Suspense>
  );
}

export default MyHostingFundList;
