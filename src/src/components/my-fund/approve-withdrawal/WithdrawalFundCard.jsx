import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import styled from "styled-components";

import routes from "@/constants/routes.js";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";

import ProfileImageName from "@/components/common/ProfileImageName.jsx";
import Button from "@/components/common/button/Button.jsx";
import WithdrawalModal from "@/components/my-fund/approve-withdrawal/WithdrawalModal.jsx";

const Styled = {
  Container: styled.article`
    margin-top: 1.5rem;
    box-sizing: content-box;
    min-height: 230px;
    padding: 1.5rem;

    display: grid;
    grid-template-columns: 2fr 3fr;
    border: ${({ theme }) => theme.border.main};

    @media screen and (max-width: 767px) {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }

    background-color: ${({ theme }) => theme.color.white};
    border-radius: 0.25rem;
    overflow: hidden;
  `,

  FundImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  `,

  RightWrapper: styled.div`
    padding: 0.5rem 2rem;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  `,

  TopBox: styled.div`
    width: 100%;
    padding-bottom: 2rem;
  `,

  Title: styled.div`
    padding-bottom: 0.6rem;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 130%;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      text-underline-position: under;
      text-underline-color: ${({ theme }) => theme.color.body};
    }
  `,

  ProfileBox: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,

  BottomBox: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  `,

  WithdrawalInfo: styled.div`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.addition};

    .amount {
      margin-top: 0.6rem;
      color: ${({ theme }) => theme.color.mainRed};
    }
  `,
};

/**
 * My 펀딩 출금승인 정보 펀딩카드
 * @param {string || number} withdrawalId 출금아이디
 * @param {string || number} withdrawalAmount 출금 금액
 * @param {string} usage 사용내역
 *  @param {string || number} fundId 펀딩 아이디
 * @param {string} thumbnailUrl 펀딩 대표 사진 url
 * @param {string} fundTitle 펀딩 제목
 * @param {string} targetDate 펀딩 마감 날짜
 * @param {String || number} organizerId 주최자 아이디
 * @param {string} organizerName 주최자 닉네임
 * @param {string} organizerProfileUrl 주최자 프로필이미지
 */

function WithdrawalFundCard({
  withdrawalId,
  withdrawalAmount,
  usage,
  fundId,
  thumbnailUrl,
  fundTitle,
  organizerId,
  organizerName,
  organizerProfileUrl,
}) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Styled.Container>
      <Styled.FundImage src={thumbnailUrl} alt={`${fundTitle}의 대표 사진`} />

      <Styled.RightWrapper>
        <Styled.TopBox>
          <Styled.Title
            onClick={() => {
              navigate(`${routes.fund}/${fundId}`);
            }}
          >
            {fundTitle}
          </Styled.Title>
          <Styled.ProfileBox>
            <ProfileImageName
              name={organizerName}
              imageUrl={organizerProfileUrl}
              id={organizerId}
              onClick={() => {
                navigate(`${routes.user}/${organizerId}`);
              }}
            />
          </Styled.ProfileBox>
        </Styled.TopBox>

        <Styled.BottomBox>
          <Styled.WithdrawalInfo>
            <div>{usage}</div>
            <div className="amount">
              {Number(withdrawalAmount).toLocaleString("ko-KR")}원
            </div>
          </Styled.WithdrawalInfo>
          <Button
            styleType={BUTTON_TYPE.SECONDARY}
            style={{ fontSize: "1rem" }}
            onClick={() => setIsModalOpen(true)}
          >
            자세히
          </Button>
          {isModalOpen && (
            <WithdrawalModal
              setOpen={setIsModalOpen}
              thumbnailUrl={thumbnailUrl}
              fundTitle={fundTitle}
              organizerProfileUrl={organizerProfileUrl}
              organizerName={organizerName}
              usage={usage}
              withdrawalAmount={withdrawalAmount}
              postId={fundId}
              withdrawalId={withdrawalId}
              organizerId={organizerId}
            />
          )}
        </Styled.BottomBox>
      </Styled.RightWrapper>
    </Styled.Container>
  );
}

WithdrawalFundCard.propTypes = {
  withdrawalId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  withdrawalAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  usage: PropTypes.string,
  fundId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  thumbnailUrl: PropTypes.string,
  fundTitle: PropTypes.string,
  organizerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  organizerName: PropTypes.string,
  organizerProfileUrl: PropTypes.string,
};

export default WithdrawalFundCard;
