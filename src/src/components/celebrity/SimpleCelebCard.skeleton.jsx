import styled from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";
import FollowButtonSkeleton from "@/components/celebrity/FollowButton.skeleton.jsx";

const Styled = {
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    padding: 0.5rem 1.5rem;
    height: 4.15rem;
    display: flex;
    align-items: center;
    border-radius: 0.25rem;
    border: ${({ theme }) => theme.border.main};
    overflow: hidden;
  `,

  ProfileImage: styled.div`
    width: 50px;
    height: 50px;
    border-radius: 9999px;
    object-fit: cover;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
  `,

  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.75rem;
  `,

  Text: styled.span`
    &.celebName {
      margin-bottom: 0.25rem;
      height: 1rem;
      width: 3rem;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }
    &.followerNum {
      height: 12px;
      width: 5rem;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }
  `,
};

function SimpleCelebCardSkeleton() {
  return (
    <Styled.Container>
      <Styled.ProfileImage>
        <Shimmer />
      </Styled.ProfileImage>

      <Styled.TextContainer>
        <Styled.Text className="celebName">
          <Shimmer />
        </Styled.Text>
        <Styled.Text className="followerNum">
          <Shimmer />
        </Styled.Text>
      </Styled.TextContainer>

      <FollowButtonSkeleton />
    </Styled.Container>
  );
}

export default SimpleCelebCardSkeleton;
