import styled, { css } from "styled-components";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { isMobile } from "react-device-detect";

import HeartButton from "@/components/fund/HeartButton.jsx";
import ProfileImageName from "@/components/common/ProfileImageName.jsx";
import routes from "@/constants/routes.js";
import FundMoneyCountdown from "@/components/fund/FundMoneyCountdown.jsx";
import useHeartButtonClick from "@/hooks/useHeartButtonClick.js";
import FundingAmountBadge from "../my-fund/support/FundingAmoutBadge";

const Styled = {
  Container: styled.article`
    position: relative;
    height: 340px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 0.25rem;
    border: ${({ theme }) => theme.border.main};
    cursor: pointer;

    ${({ $isMobile }) =>
      $isMobile ||
      css`
        &:hover {
          transform: ${({ theme }) => theme.transform.gridCard};
          box-shadow: ${({ theme }) => theme.boxShadow.gridCard};
          transition: ${({ theme }) => theme.transition.gridCard};
        }
      `}
  `,
  ThumbnailImg: styled.img`
    width: 100%;
    height: 193px;
    object-fit: cover;
    border-radius: 0.25rem 0.25rem 0 0;
  `,
  TextFundInfoBox: styled.div`
    padding: 1rem;
    width: 100%;
    height: 7.25rem;

    background-color: ${({ theme }) => theme.color.white};
    border-radius: 0 0 0.25rem 0.25rem;

    .fund-title {
      width: 100%;
      height: 3rem;
      white-space: normal;
      line-height: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
  CelebUserInfoBox: styled.div`
    position: absolute;
    bottom: 0;

    padding: 6px 1rem;
    width: 100%;
    height: 2.25rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: ${({ theme }) => theme.border.main};

    cursor: default;

    .organizer-name {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.addition};
      cursor: pointer;
    }
  `,
};

/**
 * 펀딩 목록 조회 시, Grid 속 펀딩 정보 카드
 *
 * @param {string || number} fundId 펀딩 아이디
 * @param {string} fundTitle 펀딩 제목
 * @param {string} thumbnailUrl 펀딩 대표 사진 url
 * @param {string} targetDate 펀딩 마감 날짜
 * @param {string || number} targetMoney 펀딩 목표 금액
 * @param {string || number} currentMoney 펀딩 현재 금액
 * @param {string || number} paymentAmount 후원한 펀딩 금액
 * @param {string || number} celebrityId 셀럽 아이디
 * @param {string} celebrityProfileUrl 셀럽 프로필 사진 url 없다면 프로필 아이콘
 * @param {string} celebrityName 셀럽 이름
 * @param {String || number} organizerId 주최자 아이디
 * @param {string} organizerName 주최자 닉네임
 * @param {boolean} isInUserWishList 사용자의 찜하기 여부
 */

function FundInfoGridCard({
  fundId,
  fundTitle,
  thumbnailUrl,
  targetDate,
  targetMoney,
  currentMoney,
  paymentAmount,
  celebrityId,
  celebrityProfileUrl,
  celebrityName,
  organizerId,
  organizerName,
  isInUserWishList = false,
}) {
  const navigate = useNavigate();

  const { isHeartClicked, handleHeartClick } = useHeartButtonClick({
    fundId,
    isInUserWishList,
  });

  return (
    <Styled.Container
      $isMobile={isMobile}
      onClick={() => {
        navigate(`${routes.fund}/${fundId}`);
      }}
    >
      {paymentAmount && (
        <FundingAmountBadge
          paymentAmount={paymentAmount}
          style={{ position: "absolute", top: "0.75rem", left: "0.75rem" }}
        />
      )}
      <HeartButton
        style={{
          position: "absolute",
          top: "0.75rem",
          right: "0.75rem",
        }}
        isActive={isHeartClicked}
        onClick={handleHeartClick}
      />
      <Styled.ThumbnailImg src={thumbnailUrl} />

      <Styled.TextFundInfoBox>
        <FundMoneyCountdown
          targetDate={targetDate}
          targetMoney={targetMoney}
          currentMoney={currentMoney}
        />

        <div className="fund-title">{fundTitle}</div>
      </Styled.TextFundInfoBox>

      <Styled.CelebUserInfoBox onClick={(e) => e.stopPropagation()}>
        <ProfileImageName
          imageUrl={celebrityProfileUrl}
          name={celebrityName}
          onClick={() => navigate(`${routes.celebrity}/${celebrityId}`)}
        />

        <div
          className="organizer-name"
          onClick={() => {
            navigate(`${routes.user}/${organizerId}`);
          }}
        >
          {organizerName}
        </div>
      </Styled.CelebUserInfoBox>
    </Styled.Container>
  );
}

FundInfoGridCard.propTypes = {
  fundId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  fundTitle: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  targetDate: PropTypes.string.isRequired,
  targetMoney: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  currentMoney: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  paymentAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  celebrityId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  celebrityName: PropTypes.string.isRequired,
  celebrityProfileUrl: PropTypes.string,
  organizerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  organizerName: PropTypes.string.isRequired,
  isInUserWishList: PropTypes.bool,
};

FundInfoGridCard.defaultProps = {
  celebrityProfileUrl: undefined,
};

export default memo(FundInfoGridCard);
