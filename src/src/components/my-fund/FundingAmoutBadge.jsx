import styled from "styled-components";

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

function FundingAmountBadge() {
  return (
    <Styled.Container>
      <Styled.Amount>10,000원</Styled.Amount>
    </Styled.Container>
  );
}

export default FundingAmountBadge;
