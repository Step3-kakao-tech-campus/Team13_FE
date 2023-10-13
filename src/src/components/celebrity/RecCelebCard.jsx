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

    ${({ $isMobile }) =>
      $isMobile ||
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

function RecCelebCard({
  celebId,
  celebName,
  profileUrl,
  followerNum,
  isFollowing,
}) {
  const navigate = useNavigate();

  return (
    <Styled.Container
      $isMobile={isMobile}
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
        <TestAccountIcon size={"100"} />
      )}
      <Styled.TextContainer>
        <Styled.Text className="celebName">{celebName}</Styled.Text>
        <Styled.Text className="followerNum">
          {followerNum || 0}명이 팔로우 중
        </Styled.Text>
      </Styled.TextContainer>
      <FollowButton
        celebId={celebId}
        isFollowing={isFollowing}
        style={{ padding: "6px 8px", fontSize: "14px", marginLeft: "auto" }}
      />
    </Styled.Container>
  );
}

RecCelebCard.propTypes = {
  celebId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  celebName: PropTypes.string,
  profileUrl: PropTypes.string,
  followerNum: PropTypes.number,
  isFollowing: PropTypes.bool,
};

export default RecCelebCard;
