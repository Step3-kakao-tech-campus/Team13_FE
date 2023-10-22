import styled from "styled-components";
import { PropTypes } from "prop-types";

import useSetImageFileToUrl from "@/hooks/useSetImageFileToUrl.js";
import ImageFileAddIcon from "@/assets/icon/ImageFileAddIcon.jsx";
import CloseIcon from "@/assets/icon/CloseIcon.jsx";

const Styled = {
  Container: styled.article`
    margin: 1rem 0 2rem;
    width: 100%;
  `,
  ImageLabel: styled.label`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.color.inactive};
    border-radius: 0.25rem;

    cursor: pointer;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  `,
  DeleteButton: styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    padding: 0.25rem;
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #646464;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 8px 0;
    border-radius: 9999px;
  `,
  HiddenFileInput: styled.input`
    width: 0;
    height: 0;
    opacity: 0;
    font-size: 0;
  `,
};

/**
 * 펀딩 주최 페이지의 썸네일 컴포넌트
 * @param {Blob} file 이미지 파일
 * @param {React.Dispatch.SetStateAction} setFile set 이미지 파일
 */

function ThumbnailBox({ file, setFile }) {
  const { imageUrl, handleFileChange, handleFileDelete } = useSetImageFileToUrl(
    { file, setFile },
  );

  return (
    <Styled.Container>
      <Styled.ImageLabel htmlFor="file-input">
        {imageUrl ? (
          <>
            <Styled.Image src={imageUrl} alt="썸네일 이미지" />
            <Styled.DeleteButton
              onClick={(e) => {
                e.preventDefault();
                handleFileDelete();
              }}
            >
              <CloseIcon />
            </Styled.DeleteButton>
          </>
        ) : (
          <ImageFileAddIcon />
        )}
        <Styled.HiddenFileInput
          id="file-input"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleFileChange}
        />
      </Styled.ImageLabel>
    </Styled.Container>
  );
}

ThumbnailBox.propTypes = {
  file: PropTypes.any,
  setFile: PropTypes.func.isRequired,
};

export default ThumbnailBox;