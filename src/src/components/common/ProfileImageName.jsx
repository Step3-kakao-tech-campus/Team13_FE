import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.div`
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    .image {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 9999px;
      object-fit: cover;
    }

    .name {
      padding-left: 0.25rem;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.addition};
    }
  `,
};

/**
 * 프로필 사진과 닉네임 컴포넌트
 * @param {string=} imageUrl 프로필 사진 url
 * @param {string} name 이름 혹은 닉네임
 * @param {function} onClick 클릭 핸들러 함수
 */

function ProfileImageName({ imageUrl, name, onClick }) {
  return (
    <Styled.Container onClick={onClick}>
      {imageUrl ? (
        <img className="image" src={imageUrl} alt={`${name}의 프로필 사진`} />
      ) : (
        <TestAccountIcon size={24} />
      )}

      <a className="name">{name}</a>
    </Styled.Container>
  );
}

ProfileImageName.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default ProfileImageName;
