import styled from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";

const Styled = {
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    padding: 1rem;
    height: 9.25rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0.25rem;
    overflow: hidden;
  `,

  ProfileImage: styled.div`
    width: 100px;
    height: 100px;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
  `,

  TextContainer: styled.div`
    width: calc(100% - 100px - 1rem);
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  `,

  Text: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    height: 1rem;

    &.top {
      display: flex;
      justify-content: space-between;

      .celebName {
        width: 4rem;
        height: 1.8rem;
        background-color: ${({ theme }) => theme.color.skeleton};
        border-radius: 0.25rem;
        margin-bottom: 0.5rem;
        overflow: hidden;
      }

      .followBtn {
        width: 3rem;
        height: 1.8rem;
        background-color: ${({ theme }) => theme.color.skeleton};
        border-radius: 0.25rem;
        margin-bottom: 0.5rem;
        overflow: hidden;
      }
    }

    &.a {
      .text {
        width: 65%;
        height: 0.8rem;
        background-color: ${({ theme }) => theme.color.skeleton};
        border-radius: 0.25rem;
        margin-top: 0.6rem;
        overflow: hidden;
      }
    }
  `,
};
function CelebInfoGridCardSkeleton() {
  return (
    <Styled.Container>
      <Styled.ProfileImage></Styled.ProfileImage>

      <Styled.TextContainer>
        <Styled.Text className="top">
          <div className="celebName">
            <Shimmer />
          </div>
          <div className="followBtn">
            <Shimmer />
          </div>
        </Styled.Text>

        <Styled.Text className="a">
          <div className="text">
            <Shimmer />
          </div>
        </Styled.Text>

        <Styled.Text className="a">
          <div className="text">
            <Shimmer />
          </div>
        </Styled.Text>

        <Styled.Text className="a">
          <div className="text">
            <Shimmer />
          </div>
        </Styled.Text>
      </Styled.TextContainer>
    </Styled.Container>
  );
}

export default CelebInfoGridCardSkeleton;
