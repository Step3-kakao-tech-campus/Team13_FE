import styled from "styled-components";
import { PropTypes } from "prop-types";
import CountdownBadge from "@/components/fund/CountdownBadge.jsx";
import calculatePercentage from "@/utils/calculatePercentage.js";

const Styled = {
  Container: styled.div`
    padding-bottom: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,

  MoneyBox: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .money-percentage {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${({ theme }) => theme.color.mainRed};
    }

    .current-money {
      padding: 0 0.25rem;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.inactive};
    }
  `,
};

/**
 * 펀딩의 금액 및 시간 정보 컴포넌트
 * @param {string | number} currentMoney 현재 모금된 금액
 * @param {string | number} targetMoney 목표 금액
 * @param {string} targetDate 마감 날짜
 * @param {React.htmlAttributes} containerHtmlProps
 */

function FundMoneyCountdown({
  currentMoney,
  targetMoney,
  targetDate,
  ...containerHtmlProps
}) {
  return (
    <Styled.Container {...containerHtmlProps}>
      <Styled.MoneyBox>
        <div className="money-percentage">
          {calculatePercentage(currentMoney, targetMoney).toFixed(0)}% 달성
        </div>
        <div className="current-money">
          {Number(currentMoney).toLocaleString("ko-KR")}원
        </div>
      </Styled.MoneyBox>
      <CountdownBadge target={targetDate} />
    </Styled.Container>
  );
}

FundMoneyCountdown.propTypes = {
  currentMoney: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  targetMoney: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  targetDate: PropTypes.string,
};

export default FundMoneyCountdown;
