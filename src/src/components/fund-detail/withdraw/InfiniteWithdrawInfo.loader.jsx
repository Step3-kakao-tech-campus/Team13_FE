import WithdrawInfoBarSkeleton from "@/components/fund-detail/withdraw/WithdrawInfoBar.skeleton.jsx";
import { PropTypes } from "prop-types";

/**
 * 무한스크롤 출금 내역 로더
 * @param {React.RefObject} loaderRef
 */

function InfiniteWithdrawInfoLoader({ loaderRef }) {
  return (
    <div ref={loaderRef}>
      <WithdrawInfoBarSkeleton />
      <WithdrawInfoBarSkeleton />
    </div>
  );
}

InfiniteWithdrawInfoLoader.propTypes = {
  loaderRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default InfiniteWithdrawInfoLoader;
