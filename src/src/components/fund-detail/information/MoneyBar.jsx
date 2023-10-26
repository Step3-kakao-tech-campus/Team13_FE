import styled from "styled-components";
import calculatePercentage from "@/utils/calculatePercentage.js";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.div`
    position: relative;
    margin-bottom: 1.5rem;
    width: 100%;
    height: 10px;
    background-color: #d0d0d0;
    border-radius: 0.25rem;
    overflow: hidden;
  `,
  CurrentMoney: styled.div`
    width: ${({ $width }) => $width ?? "1%"};
    height: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.color.mainRed};
  `,
};

/**
 * 현재 모금액 바 차트
 * @param {number | string} currentMoney
 * @param {number | string} targetMoney
 */

function MoneyBar({ currentMoney, targetMoney }) {
  return (
    <Styled.Container>
      <Styled.CurrentMoney
        className="current-money-bar"
        $width={`${calculatePercentage(+currentMoney, +targetMoney)}%`}
      />
    </Styled.Container>
  );
}

MoneyBar.propTypes = {
  currentMoney: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  targetMoney: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default MoneyBar;
