import { useEffect, useState } from "react";

/**
 * 파일 관련 useState를 받아 이미지 url로 변환
 * @param {Blob} file 이미지 파일 상태
 * @param {React.Dispatch.SetStateAction} setFile set 이미지 파일 상태
 * @returns {{setImageUrl: React.Dispatch.SetStateAction, imageUrl: string, handleFileChange: function, handleFileDelete: function}}
 */

function useSetImageFileToUrl({ file, setFile }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!file) {
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
