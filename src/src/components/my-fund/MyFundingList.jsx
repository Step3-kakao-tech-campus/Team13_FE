import { Suspense } from "react";
import InfiniteFundInfo from "@/components/fund-list/InfiniteFundInfo";
import InfiniteFundInfoLoader from "../fund-list/InfiniteFundInfo.loader";

function MyFundingList() {
  return (
    <Suspense fallback={<InfiniteFundInfoLoader />}>
      <InfiniteFundInfo />
    </Suspense>
  );
}

export default MyFundingList;
