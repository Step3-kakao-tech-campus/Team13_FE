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
 * @params {string | number} 펀딩한 금액
 */

function FundingAmountBadge({ fundingAmount = 500000 }) {
  return (
    <Styled.Container>
      <Styled.Amount>
        {Number(fundingAmount).toLocaleString("ko-KR")}원
      </Styled.Amount>
    </Styled.Container>
  );
}

FundingAmountBadge.PropTypes = {
  fundingAmount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default FundingAmountBadge;
