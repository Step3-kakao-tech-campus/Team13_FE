import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import FollowButton from "./FollowButton.jsx";

const Styled = {
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    padding: 0.5rem 1.5rem;
    height: 4.15rem;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */

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
      font-size: 14px;
      margin-bottom: 0.25rem;
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
  return (
    <Styled.Container>
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

export default RecCelebCard;
