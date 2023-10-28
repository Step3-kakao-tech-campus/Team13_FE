import styled from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";
import CountdownBadgeSkeleton from "@/components/fund/CountdownBadge.skeleton.jsx";

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
      height: 1.5rem;
      width: 4rem;
      font-weight: 600;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }

    .current-money {
      margin: 0 0.25rem;
      height: 0.75rem;
      width: 3rem;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }
  `,
};

function FundMoneyCountdownSkeleton({ ...containerHtmlProps }) {
  return (
    <Styled.Container {...containerHtmlProps}>
      <Styled.MoneyBox>
        <div className="money-percentage">
          <Shimmer />
        </div>
        <div className="current-money">
          <Shimmer />
        </div>
      </Styled.MoneyBox>
      <CountdownBadgeSkeleton />
    </Styled.Container>
  );
}

export default FundMoneyCountdownSkeleton;
