import { useRef, useState, useEffect } from "react";
import { GridTemplate } from "@/styles/CommonStyle";
import CelebInfoGridCardSkeleton from "@/components/celebrity/CelebInfoGridCardSkeleton.jsx";

const calculateComponentCount = (width) => {
  if (width < 752) return 2;
  if (width < 1120) return 4;
  return 6;
};

function InfiniteCelebInfoLoader({ loaderRef, ...props }) {
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
    <GridTemplate ref={loaderRef} style={{ margin: "3rem 0" }} {...props}>
      {Array.from({ length: componentNumberRef.current }).map((_, index) => (
        <CelebInfoGridCardSkeleton key={index} />
      ))}
    </GridTemplate>
  );
}

export default InfiniteCelebInfoLoader;
