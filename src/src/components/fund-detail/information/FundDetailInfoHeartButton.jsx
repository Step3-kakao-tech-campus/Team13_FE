import styled from "styled-components";
import { useParams } from "react-router-dom";
import HeartButton from "@/components/fund/HeartButton.jsx";
import useHeartButtonClick from "@/hooks/useHeartButtonClick.js";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.div`
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border: ${({ theme }) => theme.border.strong};
    border-radius: 0.25rem;
    cursor: pointer;
  `,
  LikeCount: styled.div`
    font-size: 10px;
    color: ${({ theme }) => theme.color.addition};
  `,
};

/**
 * 펀딩 상세 페이지 하트 버튼
 * @param {boolean} isInUserWishList api 통신 response 유저가 팔로잉 중인지
 * @param {number} likeCount 좋아요 숫자
 */

function FundDetailInfoHeartButton({
  isInUserWishList = false,
  likeCount = 0,
}) {
  const { fundId } = useParams();

  const { isHeartClicked, handleHeartClick } = useHeartButtonClick({
    fundId,
    isInUserWishList,
  });

  const updateLikeCount = (num) => {
    if (isInUserWishList && !isHeartClicked) return num - 1;
    if (!isInUserWishList && isHeartClicked) return num + 1;
    return num;
  };

  return (
    <Styled.Container onClick={handleHeartClick}>
      <HeartButton isActive={isHeartClicked} size={20} />
      <Styled.LikeCount>{updateLikeCount(likeCount)}</Styled.LikeCount>
    </Styled.Container>
  );
}

FundDetailInfoHeartButton.propTypes = {
  isInUserWishList: PropTypes.bool,
  likeCount: PropTypes.number,
};

export default FundDetailInfoHeartButton;
