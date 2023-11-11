import styled from "styled-components";
import BackdropModal from "@/components/common/modal/BackdropModal.jsx";
import ProfileImageName from "@/components/common/ProfileImageName.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE";
import Button from "@/components/common/button/Button.jsx";
import usePostWithdrawalApprovalMutation from "@/hooks/api/my-fund/usePostWithdrawalApprovalMutation.js";

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

function WithdrawalModal({
  setOpen,
  thumbnailUrl,
  fundTitle,
  organizerProfileUrl,
  organizerName,
  usage,
  withdrawalAmount,
  postId,
  withdrawalId,
}) {
  const { mutate: postWithdrawalApprovalMutate } =
    usePostWithdrawalApprovalMutation(() => setOpen(false));

  const handleApprovalBtnClick = () => {
    postWithdrawalApprovalMutate({
      postId,
      withdrawalId,
    });
  };

  return (
    <BackdropModal setOpen={setOpen} modalStyle={{ padding: "1.5rem 2rem" }}>
      <Styled.Container>
        <Styled.Title>출금 승인하기</Styled.Title>
        <Styled.FundImg src={thumbnailUrl} alt="출금 승인할 펀딩이미지" />

        <Styled.FundTitle>{fundTitle}</Styled.FundTitle>
        <ProfileImageName name={organizerName} imageUrl={organizerProfileUrl} />

        <Styled.WithdrawalInfo>
          <div className="history">{usage}</div>
          <div className="amount">
            {Number(withdrawalAmount).toLocaleString("ko-KR")}원
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
            onClick={handleApprovalBtnClick}
          >
            승인하기
          </Button>
        </Styled.BottomButtons>
      </Styled.Container>
    </BackdropModal>
  );
}

export default WithdrawalModal;
