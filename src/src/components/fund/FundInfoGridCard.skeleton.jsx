import styled from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";
import FundMoneyCountdownSkeleton from "@/components/fund/FundMoneyCountdown.skeleton.jsx";

const Styled = {
  Container: styled.article`
    position: relative;
    height: 340px;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.color.white};
  `,
  ThumbnailImg: styled.div`
    width: 100%;
    height: 193px;
    border-radius: 0.25rem 0.25rem 0 0;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
  `,
  TextFundInfoBox: styled.div`
    padding: 1rem;
    width: 100%;
    height: 7.25rem;

    background-color: ${({ theme }) => theme.color.white};
    border-radius: 0 0 0.25rem 0.25rem;

    .fund-title {
      width: 100%;
      height: 1.25rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      border-radius: 0.25rem;
      overflow: hidden;
    }
  `,
  MoneyCountdownBox: styled.div`
    padding-bottom: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .money {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .money-percentage {
      width: 5rem;
      height: 1.75rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      border-radius: 0.25rem;
      overflow: hidden;
    }

    .current-money {
      margin-left: 0.5rem;
      padding: 0 0.25rem;
      width: 3rem;
      height: 0.75rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      border-radius: 0.25rem;
      overflow: hidden;
    }
  `,
  CelebUserInfoBox: styled.div`
    position: absolute;
    bottom: 0;

    padding: 6px 1rem;
    width: 100%;
    height: 2.25rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: ${({ theme }) => theme.border.main};
    cursor: default;

    .celebrity {
      width: fit-content;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
    }

    .celebrity-profile {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 9999px;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }

    .celebrity-name {
      margin-left: 0.25rem;
      width: 3rem;
      height: 0.75rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
      border-radius: 0.25rem;
    }

    .organizer-name {
      width: 3rem;
      height: 0.75rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
      border-radius: 0.25rem;
    }
  `,
};

function FundInfoGridCardSkeleton() {
  return (
    <Styled.Container>
      <Styled.ThumbnailImg>
        <Shimmer />
      </Styled.ThumbnailImg>

      <Styled.TextFundInfoBox>
        <FundMoneyCountdownSkeleton />

        <div className="fund-title">
          <Shimmer />
        </div>
      </Styled.TextFundInfoBox>

      <Styled.CelebUserInfoBox>
        <div className="celebrity">
          <div className="celebrity-profile">
            <Shimmer />
          </div>
          <a className="celebrity-name">
            <Shimmer />
          </a>
        </div>

        <div className="organizer-name">
          <Shimmer />
        </div>
      </Styled.CelebUserInfoBox>
    </Styled.Container>
  );
}

export default FundInfoGridCardSkeleton;
