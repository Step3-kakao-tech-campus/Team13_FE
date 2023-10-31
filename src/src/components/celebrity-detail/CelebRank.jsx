import { styled } from "styled-components";
import { PropTypes } from "prop-types";

import FirstRibbonIcon from "@/assets/icon/FirstRibbonIcon.jsx";
import SecondRibbonIcon from "@/assets/icon/SecondRibbonIcon.jsx";
import ThirdRibbonIcon from "@/assets/icon/ThirdRibbonIcon.jsx";

const Styled = {
  RankContainer: styled.div`
    display: flex;
  `,
  Rank: styled.div`
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & div {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      font-weight: 500;
    }

    & span {
      color: ${({ theme }) => theme.color.addition};
      white-space: nowrap;
    }
  `,
};

/**
 * 셀럽순위 표시 컴포넌트 - 팔로워수, 총펀딩금액순으로 순위 표기. 1,2,3 등은 아이콘 그 외 텍스트 등수표시
 * @param {string} props.followerRank - 팔로워 순위
 * @param {string} props.fundingRank- 총 펀딩금액 순위
 */

function CelebRank({ followerRank, fundingRank }) {
  const renderIcon = (rank) => {
    const icons = {
      1: <FirstRibbonIcon />,
      2: <SecondRibbonIcon />,
      3: <ThirdRibbonIcon />,
    };
    return icons[rank] ? (
      icons[rank]
    ) : (
      <div
        style={{
          marginTop: "0.85rem",
          marginBottom: "0.84rem",
          whiteSpace: "nowrap",
        }}
      >{`${rank}등`}</div>
    );
  };

  return (
    <Styled.RankContainer>
      <Styled.Rank>
        <div>{renderIcon(followerRank)}</div>
        <span>팔로워</span>
      </Styled.Rank>
      <Styled.Rank>
        <div>{renderIcon(fundingRank)}</div>
        <span>펀딩금액</span>
      </Styled.Rank>
    </Styled.RankContainer>
  );
}

CelebRank.propTypes = {
  followerRank: PropTypes.number.isRequired,
  fundingRank: PropTypes.number.isRequired,
};

export default CelebRank;
