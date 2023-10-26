import styled from "styled-components";
import { PropTypes } from "prop-types";

import InProgressIcon from "@/assets/icon/InProgressIcon.jsx";
import MoneyIcon from "@/assets/icon/MoneyIcon.jsx";
import UserIcon from "@/assets/icon/UserIcon.jsx";

const Styled = {
  TextContainer: styled.div`
    width: calc(100% - 100px - 1rem);
    display: flex;
    flex-direction: column;
  `,

  Text: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.addition};

    & span {
      margin-left: 0.5rem;
    }
  `,
};

/**
 * 셀럽텍스트정보 컴포넌트 - 진행중인 펀딩개수, 총 펀딩 금액, 팔로워 수를 각각 아이콘과 함께 명시
 * @param {number} props.fundInProgressNum - 진행 중인 펀딩 수
 * @param {number} props.totalFundMoney - 총 펀딩 금액
 * @param {number} props.followerNum - 팔로워 수
 */

function CelebTextInfo({ fundInProgressNum, totalFundMoney, followerNum }) {
  return (
    <Styled.TextContainer>
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
  );
}

CelebTextInfo.propTypes = {
  fundInProgressNum: PropTypes.number,
  totalFundMoney: PropTypes.number,
  followerNum: PropTypes.number,
};

export default CelebTextInfo;
