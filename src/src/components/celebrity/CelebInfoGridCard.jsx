import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";
import { PropTypes } from "prop-types";

import FollowButton from "@/components/celebrity/FollowButton.jsx";
import routes from "@/constants/routes.js";

import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import InProgressIcon from "@/assets/icon/InProgressIcon.jsx";
import MoneyIcon from "@/assets/icon/MoneyIcon.jsx";
import UserIcon from "@/assets/icon/UserIcon.jsx";
import FirstRibbonIcon from "@/assets/icon/FirstRibbonIcon.jsx";
import SecondRibbonIcon from "@/assets/icon/SecondRibbonIcon.jsx";
import ThirdRibbonIcon from "@/assets/icon/ThirdRibbonIcon.jsx";

const Styled = {
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};

    padding: 1rem;
    height: 9.25rem;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    border-radius: 0.25rem;
    cursor: pointer;

    ${({ $isMobile }) =>
      !$isMobile &&
      css`
        &:hover {
          transform: ${({ theme }) => theme.transform.gridCard};
          box-shadow: ${({ theme }) => theme.boxShadow.gridCard};
          transition: ${({ theme }) => theme.transition.gridCard};
        }
      `}
  `,

  ProfileImage: styled.img`
    width: 100px;
    height: 100px;
    border-radius: 9999px;
    object-fit: cover;
  `,

  BadgeContainer: styled.div`
    position: absolute;
    left: 0.7rem;
    top: 1rem;
  `,

  TextContainer: styled.div`
    width: calc(100% - 100px - 1rem);
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  `,

  Text: styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 0.5rem;
    color: ${({ theme }) => theme.color.addition};

    &.name {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.color.body};
    }

    span {
      margin-left: 0.25rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
};

/**
 * 셀럽 목록 조회 시, grid 템플릿 내부 정보 카드
 * @param {string | number} celebId 셀럽 아이디
 * @param {string} celebName 셀럽 이름
 * @param {string=} profileUrl 셀럽 프로필 사진 url
 * @param {number} fundInProgressNum 진행 중인 셀럽 관련 펀딩 개수
 * @param {number} totalFundMoney 셀럽 관련 총 펀딩 금액
 * @param {number} followerNum 셀럽 팔로워 수
 * @param {boolean} isFollowing 셀럽 팔로잉 여부
 * @param {number} rank 셀럽 랭킹
 */

function CelebInfoGridCard({
  celebId,
  celebName,
  profileUrl,
  fundInProgressNum,
  totalFundMoney,
  followerNum,
  isFollowing,
  rank,
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
        <TestAccountIcon size={100} />
      )}
      <Styled.BadgeContainer>
        {rank === 1 && <FirstRibbonIcon />}
        {rank === 2 && <SecondRibbonIcon />}
        {rank === 3 && <ThirdRibbonIcon />}
      </Styled.BadgeContainer>

      <Styled.TextContainer>
        <Styled.Text className="name">
          <span>{celebName}</span>
          <FollowButton celebId={celebId} isFollowing={isFollowing} />
        </Styled.Text>

        <Styled.Text>
          <InProgressIcon />
          <span>{fundInProgressNum || 0}개의 펀딩 진행 중</span>
        </Styled.Text>

        <Styled.Text>
          <MoneyIcon />
          <span>총 {totalFundMoney.toLocaleString("ko-KR") || 0}원</span>
        </Styled.Text>

        <Styled.Text>
          <UserIcon />
          <span>팔로워 {followerNum || 0}명</span>
        </Styled.Text>
      </Styled.TextContainer>
    </Styled.Container>
  );
}

CelebInfoGridCard.propTypes = {
  celebId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  celebName: PropTypes.string,
  profileUrl: PropTypes.string,
  fundInProgressNum: PropTypes.number,
  totalFundMoney: PropTypes.number,
  followerNum: PropTypes.number,
  isFollowing: PropTypes.bool,
  rank: PropTypes.number,
};

export default CelebInfoGridCard;
