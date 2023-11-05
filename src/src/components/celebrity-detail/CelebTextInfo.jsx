import styled from "styled-components";
import { PropTypes } from "prop-types";

import InProgressIcon from "@/assets/icon/InProgressIcon.jsx";
import MoneyIcon from "@/assets/icon/MoneyIcon.jsx";
import UserIcon from "@/assets/icon/UserIcon.jsx";

const Styled = {
  TextContainer: styled.div``,

  Text: styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.addition};

    &:first-child {
      margin-top: 0;
    }

    & span {
      margin-left: 0.4rem;
      white-space: nowrap;
    }
    & strong {
      font-weight: 500;
      color: ${({ theme }) => theme.color.body};
    }
  `,
};

/**
 * 셀럽텍스트정보 컴포넌트 - 진행중인 펀딩개수, 총 펀딩 금액, 팔로워 수를 각각 아이콘과 함께 명시
 * @param {number} fundInProgressNum - 진행 중인 펀딩 수
 * @param {number} totalFundMoney - 총 펀딩 금액
 * @param {number} followerNum - 팔로워 수
 */

function CelebTextInfo({ fundInProgressNum, totalFundMoney, followerNum }) {
  return (
    <Styled.TextContainer>
      <Styled.Text>
        <UserIcon size={32} />
        <span>
          <strong>{followerNum || 0}</strong>
          명이 팔로우 중
        </span>
      </Styled.Text>

      <Styled.Text>
        <MoneyIcon size={32} />
        <span>
          총 <strong>{totalFundMoney.toLocaleString("ko-KR") || 0}</strong>원
        </span>
      </Styled.Text>

      <Styled.Text>
        <InProgressIcon size={32} />
        <span>
          <strong>{fundInProgressNum || 0}</strong>
          개의 펀딩 진행 중
        </span>
      </Styled.Text>
    </Styled.TextContainer>
  );
}

CelebTextInfo.propTypes = {
  fundInProgressNum: PropTypes.number,
  totalFundMoney: PropTypes.number,
  followerNum: PropTypes.number,
};

export default CelebTextInfo;
