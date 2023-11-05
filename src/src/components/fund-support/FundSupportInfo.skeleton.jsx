import styled from "styled-components";
import ProfileImageNameSkeleton from "@/components/common/ProfileImageName.skeleton.jsx";
import FundMoneyCountdownSkeleton from "@/components/fund/FundMoneyCountdown.skeleton.jsx";
import MoneyBarGraphSkeleton from "@/components/fund/MoneyBarGraph.skeleton.jsx";
import { Shimmer } from "@/styles/CommonStyle";

const Styled = {
  Container: styled.article`
    margin-top: 1.5rem;
    box-sizing: content-box;
    min-height: 220px;

    display: grid;
    grid-template-columns: 2fr 3fr;

    @media screen and (max-width: 767px) {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }

    background-color: ${({ theme }) => theme.color.white};
    border-radius: 0.25rem;
    overflow: hidden;
  `,
  FundImage: styled.div`
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.skeleton};
  `,
  RightWrapper: styled.div`
    padding: 1.5rem;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  `,
  TopBox: styled.div`
    width: 100%;
    padding-bottom: 2rem;
  `,
  Title: styled.div`
    margin-bottom: 1rem;
    height: 1.25rem;
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.skeleton};
  `,
  ProfileBox: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  BottomBox: styled.div`
    width: 100%;
  `,
};

function FundSupportInfoSkeleton() {
  return (
    <Styled.Container>
      <Styled.FundImage>
        <Shimmer />
      </Styled.FundImage>

      <Styled.RightWrapper>
        <Styled.TopBox>
          <Styled.Title>
            <Shimmer />
          </Styled.Title>
          <Styled.ProfileBox>
            <ProfileImageNameSkeleton />
            <ProfileImageNameSkeleton />
          </Styled.ProfileBox>
        </Styled.TopBox>

        <Styled.BottomBox>
          <FundMoneyCountdownSkeleton />
          <MoneyBarGraphSkeleton />
        </Styled.BottomBox>
      </Styled.RightWrapper>
    </Styled.Container>
  );
}

export default FundSupportInfoSkeleton;
