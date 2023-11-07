import styled from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";

const Styled = {
  ProfileContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Text: styled.div`
    width: 100%;
  `,

  NameAndGroup: styled.div`
    display: flex;
    .name {
      width: 5rem;
      height: 2rem;
      font-weight: 600;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }
    .group {
      width: 3rem;
      height: 1.4rem;
      font-weight: 400;
      margin-top: 0.5rem;
      margin-left: 0.5rem;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }
  `,

  CategoryAndGender: styled.div`
    margin: 0.5rem 0;
    width: 6rem;
    height: 1.2rem;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
  `,

  FollowButton: styled.div`
    padding: 0.5rem;
    height: 2.2rem;
    width: 4.8rem;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
  `,
};

/**
 * 설럽프로필 스켈레톤 컴포넌트 - 셀럽상세페이지 상단 프로필
 */
function CelebProfileSkeleton() {
  return (
    <Styled.ProfileContainer>
      <Styled.Text>
        <Styled.NameAndGroup>
          <div className="name">
            <Shimmer />
          </div>
          <div className="group">
            <Shimmer />
          </div>
        </Styled.NameAndGroup>

        <Styled.CategoryAndGender>
          <Shimmer />
        </Styled.CategoryAndGender>
      </Styled.Text>

      <Styled.FollowButton>
        <Shimmer />
      </Styled.FollowButton>
    </Styled.ProfileContainer>
  );
}

export default CelebProfileSkeleton;
