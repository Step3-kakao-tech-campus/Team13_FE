import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import FollowButton from "./FollowButton.jsx";
import routes from "@/constants/routes.js";

/**
 * 메인페에지의 추천셀럽카드
 * @param {string | number} celebId 셀럽 아이디
 * @param {string} celebName 셀럽 이름
 * @param {string=} profileUrl 셀럽 프로필 사진 url
 * @param {number} followerNum 셀럽 팔로워 수
 * @param {boolean} isFollowing 셀럽 팔로잉 여부
 */

const Styled = {
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    padding: 0.5rem 1.5rem;
    height: 4.15rem;
    display: flex;
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    border: ${({ theme }) => theme.border.main};

    ${({ $useHoverAnimation }) =>
      $useHoverAnimation &&
      css`
        &:hover {
          transform: ${({ theme }) => theme.transform.gridCard};
          box-shadow: ${({ theme }) => theme.boxShadow.gridCard};
          transition: ${({ theme }) => theme.transition.gridCard};
        }
      `}
  `,

  ProfileImage: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 9999px;
    object-fit: cover;
  `,

  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.75rem;
  `,

  Text: styled.span`
    &.celebName {
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 0.25rem;
      color: ${({ theme }) => theme.color.body};
    }
    &.followerNum {
      font-size: 12px;
      color: ${({ theme }) => theme.color.addition};
    }
  `,
};

/**
 * 셀럽의 간단한 정보를 보여주는 컴포넌트
 * @param {string | number} celebId
 * @param {string} celebName
 * @param {string} profileUrl
 * @param {string | number} followerNum
 * @param {boolean} isFollowing
 * @param {boolean} useHoverAnimation
 */

function SimpleCelebCard({
  celebId,
  celebName,
  profileUrl,
  followerNum,
  isFollowing,
  useHoverAnimation = true,
}) {
  const navigate = useNavigate();

  return (
    <Styled.Container
      $useHoverAnimation={!isMobile && useHoverAnimation}
      onClick={() => {
        navigate(`${routes.celebrity}/${celebId}`);
      }}
    >
      {profileUrl ? (
        <Styled.ProfileImage
          src={profileUrl}
          alt={`${celebName} 프로필 사진`}
        />
      ) : (
        <TestAccountIcon size={"50"} />
      )}
      <Styled.TextContainer>
        <Styled.Text className="celebName">{celebName}</Styled.Text>
        <Styled.Text className="followerNum">
          {followerNum || 0}명이 팔로우 중
        </Styled.Text>
      </Styled.TextContainer>
      <FollowButton celebId={celebId} isFollowing={isFollowing} />
    </Styled.Container>
  );
}

SimpleCelebCard.propTypes = {
  celebId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  celebName: PropTypes.string,
  profileUrl: PropTypes.string,
  followerNum: PropTypes.number,
  isFollowing: PropTypes.bool,
  useHoverAnimation: PropTypes.bool,
};

export default SimpleCelebCard;
