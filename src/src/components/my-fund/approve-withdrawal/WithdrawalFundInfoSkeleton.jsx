import ProfileImageNameSkeleton from "@/components/common/ProfileImageName.skeleton.jsx";
import Button from "@/components/common/button/Button.jsx";
import styled from "styled-components";

function WithdrawalFundInfoSkeleton() {
  const Styled = {
    Container: styled.article`
      margin-top: 1.5rem;
      box-sizing: content-box;
      min-height: 230px;
      padding: 1.5rem;

      display: grid;
      grid-template-columns: 2fr 3fr;
      border: ${({ theme }) => theme.border.main};

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
      object-fit: cover;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    `,

    RightWrapper: styled.div`
      padding: 0.5rem 2rem;
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
      margin-bottom: 0.6rem;
      width: 90%;
      height: 2rem;
      font-weight: 500;
      line-height: 130%;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
      border-radius: 0.25rem;
    `,

    ProfileBox: styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
    `,

    BottomBox: styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,

    WithdrawalInfo: styled.div`
      .usage {
        height: 1.6rem;
        width: 15rem;
        font-weight: 600;
        background-color: ${({ theme }) => theme.color.skeleton};
        overflow: hidden;
        border-radius: 0.25rem;
      }

      .amount {
        margin-top: 0.6rem;
        height: 1.6rem;
        width: 10rem;
        background-color: ${({ theme }) => theme.color.skeleton};
        overflow: hidden;
        border-radius: 0.25rem;
      }
    `,

    Button: styled.div`
      padding: 0.7rem 1.3rem;
      width: 6rem;
      height: 3rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
      border-radius: 0.25rem;
    `,
  };

  return (
    <Styled.Container>
      <Styled.FundImage></Styled.FundImage>

      <Styled.RightWrapper>
        <Styled.TopBox>
          <Styled.Title></Styled.Title>
          <Styled.ProfileBox>
            <ProfileImageNameSkeleton />
          </Styled.ProfileBox>
        </Styled.TopBox>

        <Styled.BottomBox>
          <Styled.WithdrawalInfo>
            <div className="usage"></div>
            <div className="amount"></div>
          </Styled.WithdrawalInfo>

          <Styled.Button></Styled.Button>
        </Styled.BottomBox>
      </Styled.RightWrapper>
    </Styled.Container>
  );
}

export default WithdrawalFundInfoSkeleton;
