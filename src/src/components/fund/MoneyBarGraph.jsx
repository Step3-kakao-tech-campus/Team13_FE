import styled from "styled-components";
import calculatePercentage from "@/utils/calculatePercentage.js";
import { PropTypes } from "prop-types";

const Styled = {
  TargetBar: styled.div`
    position: relative;
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
};

/**
 * 현재 펀딩율을 바 그래프로 보여주는 컴포넌트
 * @param {number} currentMoney 현재 모금 금액
 * @param {number} targetMoney 목표 금액
 */

function MoneyBarGraph({ currentMoney, targetMoney }) {
  return (
    <Styled.TargetBar>
      <Styled.CurrentBar
        $width={`${calculatePercentage(+currentMoney, +targetMoney)}%`}
      />
    </Styled.TargetBar>
  );
}

MoneyBarGraph.propTypes = {
  currentMoney: PropTypes.number,
  targetMoney: PropTypes.number,
};

export default MoneyBarGraph;
