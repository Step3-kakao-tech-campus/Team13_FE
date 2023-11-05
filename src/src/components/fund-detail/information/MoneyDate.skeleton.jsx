import styled from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";
import FundMoneyCountdownSkeleton from "@/components/fund/FundMoneyCountdown.skeleton.jsx";
import MoneyBarGraphSkeleton from "@/components/fund/MoneyBarGraph.skeleton.jsx";

const Styled = {
  TextWrapper: styled.div`
    padding: 1rem 0;
    margin: 1.5rem 0;
    border-top: ${({ theme }) => theme.border.strong};
    border-bottom: ${({ theme }) => theme.border.strong};
  `,
  TextRow: styled.div`
    padding: 0.5rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .title {
      margin-right: 1rem;
      height: 1.5rem;
      width: 5rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
      border-radius: 0.25rem;
    }

    .content {
      height: 1.25rem;
      width: 100%;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
      border-radius: 0.25rem;
    }
  `,
};

function MoneyDateSkeleton() {
  return (
    <>
      <FundMoneyCountdownSkeleton style={{ padding: "1rem 0 0.5rem 0" }} />
      <MoneyBarGraphSkeleton />

      <Styled.TextWrapper>
        <Styled.TextRow>
          <div className="title">
            <Shimmer />
          </div>
          <div className="content">
            <Shimmer />
          </div>
        </Styled.TextRow>
        <Styled.TextRow>
          <div className="title">
            <Shimmer />
          </div>
          <div className="content">
            <Shimmer />
          </div>
        </Styled.TextRow>
      </Styled.TextWrapper>
    </>
  );
}

export default MoneyDateSkeleton;
