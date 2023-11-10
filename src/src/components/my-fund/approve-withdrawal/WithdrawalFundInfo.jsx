import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import routes from "@/constants/routes";

import ProfileImageName from "@/components/common/ProfileImageName.jsx";
import Button from "@/components/common/button/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
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
    align-items: center;
  `,

  WithdrawalInfo: styled.div`
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.addition};

    .amount {
      margin-top: 0.6rem;
      color: ${({ theme }) => theme.color.mainRed};
    }
  `,
};

/**
 * My펀딩 - 출금승인 대기목록 카드
 * @returns
 *
 */

function WithdrawalFundInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const tmp = {
    fundId: 1,
    fundTitle:
      "손흥민 주장된 기념 지하철 광고 🎉🎉 축구중독자가 책임지고 펀딩합니다 ❤️‍🔥",
    thumbnailUrl:
      "https://ichef.bbci.co.uk/news/640/cpsprodpb/4118/production/_119546661_gettyimages-1294130887.jpg",
    createdAt: "2023-10-24",
    targetDate: "2023-12-17",
    targetMoney: "3000000",
    currentMoney: "2340000",
    participantNumber: 43,
    celebrityId: "sonny",
    celebrityName: "손흥민",
    celebrityProfileUrl:
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
    isFollowing: true,
    celebrityFollowerNum: 3450,
    organizerId: "soccer123",
    organizerName: "축구도사",
    organizerProfileUrl:
      "https://velog.velcdn.com/images/j8won/profile/55917697-2140-40be-ad07-d2d02137f38e/image.jpeg",
    likeCount: 218,
    isInUserWishList: true,
    isOrganizer: true,
    withdrawlHistory: "강남역 스크린도어",
    withdrawlAmount: 1000000,
  };

  return (
    <Styled.Container>
      <Styled.FundImage
        src={tmp.thumbnailUrl}
        alt={`${tmp.fundTitle}의 대표 사진`}
      />

      <Styled.RightWrapper>
        <Styled.TopBox>
          <Styled.Title>{tmp.fundTitle}</Styled.Title>
          <Styled.ProfileBox>
            <ProfileImageName
              name={tmp.organizerName}
              imageUrl={tmp.organizerProfileUrl}
              onClick={() => {
                navigate(`${routes.user}/${tmp.organizerId}`);
              }}
            />
          </Styled.ProfileBox>
        </Styled.TopBox>

        <Styled.BottomBox>
          <Styled.WithdrawalInfo>
            <div>{tmp.withdrawlHistory}</div>
            <div className="amount">
              {Number(tmp.withdrawlAmount).toLocaleString("ko-KR")}원
            </div>
          </Styled.WithdrawalInfo>
          <Button
            styleType={BUTTON_TYPE.SECONDARY}
            style={{ padding: "0.7rem 1.3rem ", fontSize: "1.25rem" }}
            onClick={() => setIsModalOpen(true)}
          >
            자세히
          </Button>
          {isModalOpen && <WithdrawalModal setOpen={setIsModalOpen} />}
        </Styled.BottomBox>
      </Styled.RightWrapper>
    </Styled.Container>
  );
}
export default WithdrawalFundInfo;
