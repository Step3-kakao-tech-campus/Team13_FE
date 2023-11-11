import styled from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";

const Styled = {
  TextContainer: styled.div``,

  Text: styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    &:first-child {
      margin-top: 0;
    }

    .text {
      margin-left: 0.4rem;
      white-space: nowrap;
      font-weight: 500;
      width: 7rem;
      height: 1.3rem;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }
  `,

  Icon: styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
  `,
};

/**
 * 셀럽 텍스트정보 스켈레톶 컴포넌트 - 셀럽 상세페이지 상단우측 텍스트정보
 */

function CelebTextInfoSkeleton() {
  return (
    <Styled.TextContainer>
      <Styled.Text>
        <Styled.Icon>
          <Shimmer />
        </Styled.Icon>
        <div className="text">
          <Shimmer />
        </div>
      </Styled.Text>

      <Styled.Text>
        <Styled.Icon>
          <Shimmer />
        </Styled.Icon>
        <div className="text">
          <Shimmer />
        </div>
      </Styled.Text>

      <Styled.Text>
        <Styled.Icon>
          <Shimmer />
        </Styled.Icon>
        <div className="text">
          <Shimmer />
        </div>
      </Styled.Text>
    </Styled.TextContainer>
  );
}

export default CelebTextInfoSkeleton;
