import styled from "styled-components";
import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import { useNavigate } from "react-router-dom";
import routes from "@/constants/routes.js";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.div`
    padding: 1rem;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.main};
    border-radius: 0.25rem;

    cursor: pointer;
  `,
  Profile: styled.img`
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 9999px;
  `,
  Nickname: styled.div`
    padding-left: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
  `,
};

/**
 * 펀딩 상세 페이지 소개 탭의 공동 관리자
 * @param {string || number} userId
 * @param {string=} profileUrl
 * @param {string} nickname
 */

function CoAdminUser({ userId, profileUrl, nickname }) {
  const navigate = useNavigate();
  return (
    <Styled.Container
      onClick={() => {
        navigate(`${routes.user}/${userId}`);
      }}
    >
      {profileUrl ? (
        <Styled.Profile src={profileUrl} alt={`${nickname}의 프로필 사진`} />
      ) : (
        <TestAccountIcon size={48} />
      )}
      <Styled.Nickname>{nickname}</Styled.Nickname>
    </Styled.Container>
  );
}

CoAdminUser.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  profileUrl: PropTypes.string,
  nickname: PropTypes.string.isRequired,
};

export default CoAdminUser;
