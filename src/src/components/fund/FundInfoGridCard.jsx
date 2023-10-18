import styled, { css } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { isMobile } from "react-device-detect";

import CountdownBadge from "@/components/fund/CountdownBadge.jsx";
import HeartButton from "@/components/fund/HeartButton.jsx";
import routes from "@/constants/routes.js";
import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";

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
    }
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
  MoneyCountdownBox: styled.div`
    padding-bottom: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .money {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .money-percentage {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${({ theme }) => theme.color.mainRed};
    }

    .current-money {
      padding: 0 0.25rem;
      font-size: 0.75px;
      color: ${({ theme }) => theme.color.inactive};
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

    .celebrity {
      width: fit-content;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
    }

    .celebrity-profile {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 9999px;
      object-fit: cover;
    }

    .celebrity-name {
      padding-left: 0.25rem;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.addition};
    }

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
  celebrityId,
  celebrityProfileUrl,
  celebrityName,
  organizerId,
  organizerName,
  isInUserWishList,
}) {
  const [isHeartClicked, setIsHeartClicked] = useState(isInUserWishList);
  const navigate = useNavigate();

  const calculateCurrentPercentage = (currentMoney, targetMoney) => {
    return (currentMoney / targetMoney) * 100;
  };

  return (
    <Styled.Container
      $isMobile={isMobile}
      onClick={() => {
        navigate(`${routes.fund}/${fundId}`);
      }}
    >
      <HeartButton
        style={{
          position: "absolute",
          top: "0.75rem",
          right: "0.75rem",
        }}
        isActive={isHeartClicked}
        onClick={(e) => {
          e.stopPropagation();
          setIsHeartClicked((prev) => !prev);
        }}
      />
      <Styled.ThumbnailImg src={thumbnailUrl} />

      <Styled.TextFundInfoBox>
        <Styled.MoneyCountdownBox>
          <div className="money">
            <div className="money-percentage">
              {calculateCurrentPercentage(currentMoney, targetMoney)}% 달성
            </div>
            <div className="current-money">
              {Number(currentMoney).toLocaleString("ko-KR")}원
            </div>
          </div>
          <CountdownBadge target={targetDate} />
        </Styled.MoneyCountdownBox>

        <div className="fund-title">{fundTitle}</div>
      </Styled.TextFundInfoBox>

      <Styled.CelebUserInfoBox>
        <div
          className="celebrity"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`${routes.celebrity}/${celebrityId}`);
          }}
        >
          {celebrityProfileUrl ? (
            <img
              className="celebrity-profile"
              src={celebrityProfileUrl}
              alt={`${celebrityName}의 프로필 사진`}
            />
          ) : (
            <TestAccountIcon size={24} />
          )}

          <a className="celebrity-name">{celebrityName}</a>
        </div>

        <div
          className="organizer-name"
          onClick={(e) => {
            e.stopPropagation();
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
  celebrityId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  celebrityName: PropTypes.string.isRequired,
  celebrityProfileUrl: PropTypes.string,
  organizerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  organizerName: PropTypes.string.isRequired,
  isInUserWishList: PropTypes.bool.isRequired,
};

FundInfoGridCard.defaultProps = {
  celebrityProfileUrl: undefined,
};

export default FundInfoGridCard;
