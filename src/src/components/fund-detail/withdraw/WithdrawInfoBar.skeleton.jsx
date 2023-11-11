import styled from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";

const Styled = {
  Container: styled.div`
    margin: 1rem 0;
    width: 100%;
  `,
  Date: styled.div`
    width: 3rem;
    margin-bottom: 0.25rem;
    height: 0.75rem;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
    border-radius: 0.25rem;
  `,
  Bar: styled.div`
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.main};
    border-radius: 0.25rem;
  `,
  EvidenceWrapper: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .icon {
      width: 2rem;
      height: 2rem;
      border-radius: 9999px;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }
    .usage-title {
      width: 5rem;
      margin-left: 0.5rem;
      font-weight: 600;
      height: 1rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
      border-radius: 0.25rem;
    }
  `,
  MoneyWrapper: styled.div`
    .withdraw-money {
      width: 5rem;
      margin-bottom: 0.25rem;
      font-weight: 600;
      height: 1rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
      border-radius: 0.25rem;
    }

    .total-money {
      width: 3rem;
      float: right;
      height: 0.75rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
      border-radius: 0.25rem;
    }
  `,
};

function WithdrawInfoBarSkeleton() {
  return (
    <>
      <Styled.Container>
        <Styled.Date>
          <Shimmer />
        </Styled.Date>
        <Styled.Bar>
          <Styled.EvidenceWrapper>
            <div className="icon">
              <Shimmer />
            </div>

            <div className="usage-title">
              <Shimmer />
            </div>
          </Styled.EvidenceWrapper>
          <Styled.MoneyWrapper>
            <div className="withdraw-money">
              <Shimmer />
            </div>
            <div className="total-money">
              <Shimmer />
            </div>
          </Styled.MoneyWrapper>
        </Styled.Bar>
      </Styled.Container>
    </>
  );
}

export default WithdrawInfoBarSkeleton;
