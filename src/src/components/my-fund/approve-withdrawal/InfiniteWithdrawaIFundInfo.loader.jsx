import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import WithdrawalFundInfoSkeleton from "@/components/my-fund/approve-withdrawal/WithdrawalFundInfoSkeleton.jsx";

/**
 * 출금승인 목록 페이지 로더
 * @param {React.RefObject} loaderRef
 * @returns {JSX.Element}
 * @constructor
 */

function InfiniteWithdrawalFundInfoLoader({ loaderRef }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={loaderRef} style={{ margin: "3rem 0" }}>
      <WithdrawalFundInfoSkeleton />
    </div>
  );
}

InfiniteWithdrawalFundInfoLoader.propTypes = {
  loaderRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default InfiniteWithdrawalFundInfoLoader;
