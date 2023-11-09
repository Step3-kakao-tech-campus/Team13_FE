import { Suspense } from "react";
import InfiniteFundInfoLoader from "@/components/fund-list/InfiniteFundInfo.loader.jsx";
import InfiniteSupportFund from "@/components/my-fund/support/InfiniteSupportFund.jsx";

function MyFundingList() {
  return (
    <Suspense fallback={<InfiniteFundInfoLoader />}>
      <InfiniteSupportFund />
    </Suspense>
  );
}

export default MyFundingList;
