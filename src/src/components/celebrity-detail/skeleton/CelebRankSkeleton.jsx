import { styled } from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";

const Styled = {
  RankContainer: styled.div`
    display: flex;
  `,
  Rank: styled.div`
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .rank {
      margin-bottom: 0.5rem;
      width: 3rem;
      height: 3rem;
      font-weight: 500;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }

    .rank-desc {
      white-space: nowrap;
      width: 3rem;
      height: 1rem;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }
  `,
};

/**
 * 셀럽 순위 스켈레톤 컴포넌트 - 셀럽상세페이지 상단 순위아이콘 및 텍스트
 */

function CelebRankSkeleton() {
  return (
    <Styled.RankContainer>
      <Styled.Rank>
        <div className="rank">
          <Shimmer />
        </div>
        <div className="rank-desc">
          <Shimmer />
        </div>
      </Styled.Rank>
      <Styled.Rank>
        <div className="rank">
          <Shimmer />
        </div>
        <div className="rank-desc">
          <Shimmer />
        </div>
      </Styled.Rank>
    </Styled.RankContainer>
  );
}

export default CelebRankSkeleton;
