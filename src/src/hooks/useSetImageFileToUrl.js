import { useEffect } from "react";

/** 파일을 입력받아 url로 변경 후 callback 함수에 적용
 * @param fileRef 파일의 ref
 * @param callback setPreviewSrc
 */

function useSetImageFileToUrl({ file, callback }) {
  useEffect(() => {
    if (!file || file === "") {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      callback?.(reader.result);
    };
  }, [file, callback]);
}

export default useSetImageFileToUrl;
