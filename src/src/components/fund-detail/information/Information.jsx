import styled, { css } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import ProfileImageName from "@/components/common/ProfileImageName.jsx";
import routes from "@/constants/routes.js";
import useFundDetailInfoQuery from "@/hooks/api/fund/useFundDetailInfoQuery.js";
import MoneyDate from "@/components/fund-detail/information/MoneyDate.jsx";
import Button from "@/components/common/button/Button.jsx";
import FundDetailInfoHeartButton from "@/components/fund-detail/information/FundDetailInfoHeartButton.jsx";
import AlertIcon from "@/assets/icon/AlertIcon.jsx";
import SimpleCelebCard from "@/components/celebrity/SimpleCelebCard.jsx";
import { useEffect } from "react";
import { PropTypes } from "prop-types";

const Styled = {
  InfoWrap: styled.article`
    padding-bottom: 2rem;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    border-bottom: ${({ theme }) => theme.border.strong};

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  `,
  Thumbnail: styled.img`
    width: calc(100% - 22.5rem - 2rem);
    aspect-ratio: 16/10;
    border-radius: 0.25rem;
    object-fit: cover;

    @media screen and (max-width: 767px) {
      width: 100%;
    }
  `,
  Container: styled.div`
    padding-left: 2rem;
    width: 22.5rem;

    @media screen and (max-width: 767px) {
      padding: 2rem 0 0;
      width: 100%;
    }
  `,
  Title: styled.div`
    padding-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 130%;
  `,
  ParticipantRow: styled.div`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${({ theme }) => theme.border.strong};
  `,
  ParticipantBox: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    ${({ $isRed, theme }) =>
      $isRed &&
      css`
        color: ${theme.color.mainRed};
      `}

    .number {
      padding-right: 0.25rem;
      font-size: 1.25rem;
      font-family: ${({ theme }) => theme.fontFamily.doHyeon};
    }

    .text {
      padding-bottom: 3px;
      font-size: 0.75rem;
      font-weight: 600;
    }
  `,
  ButtonBox: styled.div`
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-gap: 0.5rem;
  `,

  AdditionalDetailInstruction: styled.div`
    padding: 1rem;
    margin-bottom: 1rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #ededed;
    border-radius: 0.25rem;

    .text {
      padding-left: 0.25rem;
      color: #4a5056;
      font-size: 10px;
    }
  `,
};

/**
 * 펀딩 상세 페이지의 펀딩 정보 컴포넌트
 * @param {function} setIsOrganizer
 */

function Information({ setIsOrganizer }) {
  const navigate = useNavigate();
  const { fundId } = useParams();
  const { data } = useFundDetailInfoQuery({ fundId: fundId });
  const { isOrganizer } = data;

  useEffect(() => {
    setIsOrganizer(isOrganizer);
  }, [isOrganizer]);

  const handleSponsorshipButtonClick = () => {
    navigate(`${routes.support}/${fundId}`);
  };

  return (
    <Styled.InfoWrap>
      <Styled.Thumbnail
        src={data?.thumbnailUrl}
        alt={`${data?.fundTitle}의 대표 사진`}
      />

      <Styled.Container>
        <Styled.Title>{data?.fundTitle}</Styled.Title>
        <ProfileImageName
          name={data?.organizerName}
          imageUrl={data?.organizerProfileUrl}
          onClick={() => navigate(`${routes.user}/${data?.organizerId}`)}
        />

        <MoneyDate
          createdDate={data?.createdAt}
          endDate={data?.endDate}
          targetMoney={Number(data?.targetMoney)}
          currentMoney={Number(data?.currentMoney)}
        />

        <Styled.ParticipantRow>
          <Styled.ParticipantBox>
            <div className="number">{data?.participantNumber}</div>
            <div className="text">명 참여</div>
          </Styled.ParticipantBox>

          <Styled.ParticipantBox $isRed={true}>
            <div className="number">
              {Number(data?.targetMoney - data?.currentMoney).toLocaleString(
                "ko-KR",
              )}
            </div>
            <div className="text">원 남음</div>
          </Styled.ParticipantBox>
        </Styled.ParticipantRow>

        <Styled.ButtonBox>
          <FundDetailInfoHeartButton
            isInUserWishList={data?.isInUserWishList}
            likeCount={data?.likeCount}
          />
          <Button
            style={{ fontWeight: "500" }}
            onClick={handleSponsorshipButtonClick}
          >
            후원하기
          </Button>
        </Styled.ButtonBox>

        <Styled.AdditionalDetailInstruction>
          <AlertIcon />
          <div className="text">
            전체 프로젝트에 대한 안내사항은 하단 내용을 참고해주세요 !
          </div>
        </Styled.AdditionalDetailInstruction>

        <SimpleCelebCard
          celebName={data?.celebrityName}
          celebId={data?.celebrityId}
          profileUrl={data?.celebrityProfileUrl}
          followerNum={data?.celebrityFollowerNum}
          isFollowing={data?.isFollowing}
          useHoverAnimation={false}
        />
      </Styled.Container>
    </Styled.InfoWrap>
  );
}

Information.propTypes = {
  setIsOrganizer: PropTypes.func,
};

export default Information;
