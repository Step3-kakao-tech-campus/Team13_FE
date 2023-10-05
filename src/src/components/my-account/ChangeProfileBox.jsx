import styled from "styled-components";
import { useEffect, useState } from "react";
import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import useSetImageFileToUrl from "@/hooks/useSetImageFileToUrl.js";
import CloseIcon from "@/assets/icon/CloseIcon.jsx";

const Styled = {
  Container: styled.div`
    padding: 1rem 0 0.75rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  ImageBox: styled.div`
    position: relative;
    padding: 13.5px 1rem 0;
    cursor: pointer;

    .delete-button {
      position: absolute;
      top: 1rem;
      right: 1rem;

      padding: 0.25rem;
      width: 2rem;
      height: 2rem;

      display: none;

      color: #646464;
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: rgba(0, 0, 0, 0.2) 0 0 8px 0;
      border-radius: 9999px;
    }

    &:hover .delete-button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
  Image: styled.img`
    width: 100px;
    height: 100px;
    border-radius: 9999px;
    object-fit: cover;
  `,
  HiddenFileInput: styled.input`
    width: 0;
    height: 0;
    opacity: 0;
    font-size: 0;
  `,
  FileInputLabel: styled.label`
    margin-top: 1rem;
    padding: 0.5rem;

    background-color: ${({ theme }) => theme.color.subBlack};
    color: ${({ theme }) => theme.color.white};
    font-size: 0.75rem;

    border-radius: 0.25rem;
    cursor: pointer;
  `,
};

function ChangeProfileBox({ loadedUrl }) {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleDeleteButtonClick = () => {
    setImageFile(null);
    setImageUrl("");
  };

  useEffect(() => {
    const loadProfile = async () => {
      const response = await fetch(loadedUrl);
      const blob = await response.blob();
      setImageFile(new File([blob], "image.jpg", { type: blob.type }));
      setImageUrl(loadedUrl);
    };

    if (!loadedUrl || loadedUrl === "") return;

    loadProfile();
  }, [loadedUrl]);

  useSetImageFileToUrl({
    file: imageFile,
    callback: (e) => {
      setImageUrl(e);
    },
  });

  return (
    <Styled.Container>
      {imageUrl ? (
        <Styled.ImageBox>
          <Styled.Image src={imageUrl} />
          <button className="delete-button" onClick={handleDeleteButtonClick}>
            <CloseIcon />
          </button>
        </Styled.ImageBox>
      ) : (
        <TestAccountIcon size="100" style={{ margin: "1rem 1rem 0" }} />
      )}

      <Styled.FileInputLabel htmlFor="file-input">
        사진 변경하기
        <Styled.HiddenFileInput
          id="file-input"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleFileChange}
        />
      </Styled.FileInputLabel>
    </Styled.Container>
  );
}

export default ChangeProfileBox;
