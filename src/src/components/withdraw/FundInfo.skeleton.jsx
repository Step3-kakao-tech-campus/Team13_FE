import styled from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";
import ProfileImageNameSkeleton from "@/components/common/ProfileImageName.skeleton.jsx";

const Styled = {
  Container: styled.article`
    padding: 1rem;
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.main};
    border-radius: 0.25rem;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    overflow: hidden;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      img {
        width: 100%;
      }
    }
  `,
  FundImg: styled.div`
    width: 40%;
    height: 10rem;
    object-fit: cover;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
  `,
  TextInfoWrapper: styled.div`
    margin-bottom: 2rem;
    width: 60%;
    .title {
      margin-bottom: 0.5rem;
      width: 100%;
      height: 1.25rem;
      font-weight: 500;
      line-height: 130%;

      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }
  `,
};

function FundInfoSkeleton() {
  return (
    <Styled.Container>
      <Styled.FundImg>
        <Shimmer />
      </Styled.FundImg>

      <Styled.TextInfoWrapper>
        <div className="title">
          <Shimmer />
        </div>
        <ProfileImageNameSkeleton />
      </Styled.TextInfoWrapper>
    </Styled.Container>
  );
}

export default FundInfoSkeleton;
