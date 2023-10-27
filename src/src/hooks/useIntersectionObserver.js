import { useEffect } from "react";

function useIntersectionObserver(callback, loaderRef) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        callback?.();
      },
      { threshold: 0.7 },
    );

    const observe = (element) => {
      observer.observe(element);
      return () => observer.unobserve(element);
    };

    const unobserve = observe(loaderRef.current);
    return () => {
      observer && unobserve();
    };
  }, [loaderRef, callback]);
}

export default useIntersectionObserver;
