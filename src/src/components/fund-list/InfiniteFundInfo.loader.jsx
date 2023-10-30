import { useRef, useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import FundInfoGridCardSkeleton from "@/components/fund/FundInfoGridCard.skeleton.jsx";
import { GridTemplate } from "@/styles/CommonStyle";

const calculateComponentCount = (width) => {
  if (width < 752) return 2;
  if (width < 1120) return 4;
  return 6;
};

/**
 * 화면 크기에 따라 스켈레톤 개수가 변경되는 펀딩 목록 페이지 로더
 * @param {React.RefObject} loaderRef
 * @returns {JSX.Element}
 * @constructor
 */

function InfiniteFundInfoLoader({ loaderRef }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const componentNumberRef = useRef(calculateComponentCount(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    componentNumberRef.current = calculateComponentCount(windowWidth);
  }, [windowWidth]);

  return (
    <GridTemplate ref={loaderRef} style={{ margin: "3rem 0" }}>
      {Array.from({ length: componentNumberRef.current }).map((_, index) => (
        <FundInfoGridCardSkeleton key={index} />
      ))}
    </GridTemplate>
  );
}

InfiniteFundInfoLoader.propTypes = {
  loaderRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default InfiniteFundInfoLoader;
