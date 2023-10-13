import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

import InProgress from "@/assets/icon/InProgressIcon.jsx";
import Money from "@/assets/icon/MoneyIcon.jsx";
import User from "@/assets/icon/UserIcon.jsx";
import routes from "@/constants/routes.js";
import FollowButton from "@/components/celebrity/FollowButton.jsx";

const Styled = {
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    
    padding: 1rem;
    height: 9.25rem;
    position: relative;
    
    display: flex;
    align-items: center;
    justify-content: space-around;

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
  }
  `,
  TextContainer: styled.div`
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
    }

    img {
      margin-right: 0.25rem;
    }
  `,
};

function CelebInfoGridCard({
  celebId,
  celebName,
  profileUrl,
  fundInProgressNum,
  totalFundMoney,
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
      <Styled.TextContainer>
        <Styled.Text className="name">
          <span>{celebName}</span>
          <FollowButton celebId={celebId} isFollowing={isFollowing} />
        </Styled.Text>
        <Styled.Text>
          <InProgress />
          <span>{fundInProgressNum}개의 펀딩 진행 중</span>
        </Styled.Text>
        <Styled.Text>
          <Money />
          <span>총 {totalFundMoney}원</span>
        </Styled.Text>
        <Styled.Text>
          <User />
          <span>{followerNum}명이 팔로우 중</span>
        </Styled.Text>
      </Styled.TextContainer>
    </Styled.Container>
  );
}

export default CelebInfoGridCard;
