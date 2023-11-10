import styled from "styled-components";
import BackdropModal from "@/components/common/modal/BackdropModal.jsx";
import ProfileImageName from "@/components/common/ProfileImageName.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE";
import Button from "@/components/common/button/Button.jsx";

const Styled = {
  Container: styled.div`
    @media screen and (min-width: 769px) {
      width: 20rem;
    }
  `,

  Title: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
  `,

  FundImg: styled.img`
    width: 100%;
    height: 100%;
    margin: 1.6rem 0 1.2rem;
    object-fit: cover;
    border-radius: 0.25rem;
  `,

  FundTitle: styled.div`
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  `,

  WithdrawalInfo: styled.div`
    margin: 1rem 0;

    .history {
      font-size: 1rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.addition};
    }

    .amount {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${({ theme }) => theme.color.mainRed};
    }
  `,

  BottomButtons: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  `,
};

function WithdrawalModal({ setOpen }) {
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
    <BackdropModal setOpen={setOpen} modalStyle={{ padding: "1.5rem 2rem" }}>
      <Styled.Container>
        <Styled.Title>출금 승인하기</Styled.Title>
        <Styled.FundImg src={tmp.thumbnailUrl} alt="출금 승인할 펀딩이미지" />

        <Styled.FundTitle>{tmp.fundTitle}</Styled.FundTitle>
        <ProfileImageName
          name={tmp.organizerName}
          imageUrl={tmp.organizerProfileUrl}
        />

        <Styled.WithdrawalInfo>
          <div className="history">{tmp.withdrawlHistory}</div>
          <div className="amount">
            {Number(tmp.withdrawlAmount).toLocaleString("ko-KR")}원
          </div>
        </Styled.WithdrawalInfo>

        <Styled.BottomButtons>
          <Button
            styleType={BUTTON_TYPE.SECONDARY}
            style={{ padding: "0.7rem ", fontWeight: 600, flex: 1 }}
          >
            거절하기
          </Button>
          <Button
            styleType={BUTTON_TYPE.PRIMARY}
            style={{ padding: "0.7rem ", fontWeight: 600, flex: 1 }}
          >
            승인하기
          </Button>
        </Styled.BottomButtons>
      </Styled.Container>
    </BackdropModal>
  );
}

export default WithdrawalModal;
