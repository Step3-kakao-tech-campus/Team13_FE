import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

/**
 * 파일, 이미지 url, 파일 변경 핸들러, 파일 삭제 핸들러를 반환하는 커스텀 훅
 * @param {string=} initialImageUrl 초기 이미지 url
 * @returns {{ file: blob, imageUrl: string, handleFileChange: function, handleFileDelete: function}}
 */

function useSetImageFileToUrl(initialImageUrl) {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const convertURLtoFile = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], filename, metadata);
      } catch (error) {
        console.error("Error converting URL to File:", error);
        return null;
      }
    };

    async function fetchData() {
      setImageUrl(initialImageUrl);
      const newFile = await convertURLtoFile(initialImageUrl);
      if (newFile) {
        setFile(newFile);
      }
    }

    if (!initialImageUrl) return;
    fetchData();
  }, [initialImageUrl]);

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

  return { file, imageUrl, handleFileChange, handleFileDelete };
}

useSetImageFileToUrl.propTypes = {
  initialImage: PropTypes.string,
};

export default useSetImageFileToUrl;
