import FundMoneyCountdown from "@/components/fund/FundMoneyCountdown.jsx";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import MoneyBarGraph from "@/components/fund/MoneyBarGraph.jsx";

const Styled = {
  TargetBar: styled.div`
    position: relative;
    margin-bottom: 1.5rem;
    width: 100%;
    height: 10px;
    background-color: #d0d0d0;
    border-radius: 0.25rem;
    overflow: hidden;
  `,
  CurrentBar: styled.div`
    width: ${({ $width }) => $width ?? "1%"};
    height: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.color.mainRed};
  `,
  TextWrapper: styled.div`
    margin-top: 1.5rem;
    padding: 1rem 0;
    border-top: ${({ theme }) => theme.border.strong};
    border-bottom: ${({ theme }) => theme.border.strong};
  `,
  TextRow: styled.div`
    padding: 0.5rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .title {
      padding: 0.25rem 1rem 0 0;
      font-family: ${({ theme }) => theme.fontFamily.doHyeon};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: start;

      @media screen and (max-width: 369px) {
        font-size: 1.25rem;
      }
    }

    .content {
      font-size: 1.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
};

/**
 * 펀딩 상세 정보의 돈, 날짜 관련 엘리먼트를 보여주는 컴포넌트
 * @param {number} currentMoney 현재 모금 금액
 * @param {number} targetMoney 목표 금액
 * @param {string} createdDate 펀딩 생성 날짜
 * @param {string} endDate 펀딩 마감 날짜
 */

function MoneyDate({ currentMoney, targetMoney, createdDate, endDate }) {
  const formatDateToString = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}.${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;
  };

  return (
    <>
      <FundMoneyCountdown
        currentMoney={currentMoney}
        targetMoney={targetMoney}
        targetDate={endDate}
        style={{ padding: "1rem 0 0.5rem 0" }}
      />

      <MoneyBarGraph targetMoney={targetMoney} currentMoney={currentMoney} />

      <Styled.TextWrapper>
        <Styled.TextRow>
          <div className="title">목표금액</div>
          <div className="content">
            {targetMoney?.toLocaleString("ko-KR")}원
          </div>
        </Styled.TextRow>
        <Styled.TextRow>
          <div className="title">펀딩기간</div>
          <div className="content">
            {formatDateToString(createdDate)} ~ {formatDateToString(endDate)}
          </div>
        </Styled.TextRow>
      </Styled.TextWrapper>
    </>
  );
}

MoneyDate.propTypes = {
  currentMoney: PropTypes.number,
  targetMoney: PropTypes.number,
  createdDate: PropTypes.string,
  endDate: PropTypes.string,
};

export default MoneyDate;
