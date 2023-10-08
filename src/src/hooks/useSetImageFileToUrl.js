import { useEffect, useState } from "react";

/**
 * 파일 관련 useState를 받아 이미지 url로 변환
 * @param file 이미지 파일 상태
 * @param setFile set 이미지 파일 상태
 * @returns {{setImageUrl: (value: (((prevState: string) => string) | string)) => void, imageUrl: string, handleFileChange: handleFileChange, handleFileDelete: handleFileDelete}}
 */

function useSetImageFileToUrl({ file, setFile }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!file || file === "") {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageUrl(reader.result);
    };
  }, [file]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileDelete = () => {
    setFile(null);
    setImageUrl("");
  };

  return { imageUrl, setImageUrl, handleFileChange, handleFileDelete };
}

export default useSetImageFileToUrl;
