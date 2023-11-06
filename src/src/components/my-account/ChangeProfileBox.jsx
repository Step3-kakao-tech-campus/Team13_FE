import styled from "styled-components";
import { PropTypes } from "prop-types";

import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
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

      display: flex;
      justify-content: center;
      align-items: center;

      color: #646464;
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: rgba(0, 0, 0, 0.2) 0 0 8px 0;
      border-radius: 9999px;
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

/**
 * 프로필 이미지 변경 컴포넌트
 * @param {string} imageUrl 프로필 이미지 url
 * @param {function} handleFileChange 프로필 이미지 변경 핸들러
 * @param {function} handleFileDelete 프로필 이미지 삭제 핸들러
 */

function ChangeProfileBox({ imageUrl, handleFileChange, handleFileDelete }) {
  return (
    <Styled.Container>
      {imageUrl ? (
        <Styled.ImageBox>
          <Styled.Image src={imageUrl} />
          <button className="delete-button" onClick={handleFileDelete}>
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

ChangeProfileBox.propTypes = {
  imageUrl: PropTypes.string,
  handleFileDelete: PropTypes.func,
  handleFileChange: PropTypes.func,
};

export default ChangeProfileBox;
