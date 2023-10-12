import { useCallback, useEffect } from "react";

/** ref 외부 클릭시 callback 실행
 * @param {React.RefObject} ref
 * @param {function} callback
 */
function useOutsideClick(ref, callback) {
  const handleClick = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback?.();
      }
    },
    [ref, callback],
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [ref, callback, handleClick]);
}

export default useOutsideClick;
