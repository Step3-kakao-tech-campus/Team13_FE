import styled from "styled-components";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.div`
    padding: 0.5rem 0.7rem;
    background-color: #0f8cff;
    border-radius: 0.25rem;
    display: inline-block;
  `,
  Amount: styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.white};
  `,
};

/**
 * My펀딩페이지 - 펀딩내역 카드에 표시되는 내가 펀딩한 금액 뱃지
 *  @param {string || number} paymentAmount 후원한 펀딩 금액
 */

function FundingAmountBadge({ paymentAmount, ...htmlDivProps }) {
  return (
    <Styled.Container {...htmlDivProps}>
      <Styled.Amount>
        {Number(paymentAmount).toLocaleString("ko-KR")}원
      </Styled.Amount>
    </Styled.Container>
  );
}

FundingAmountBadge.propTypes = {
  paymentAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FundingAmountBadge;
