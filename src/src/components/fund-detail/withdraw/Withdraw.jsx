import styled from "styled-components";
import Button from "@/components/common/button/Button.jsx";
import WithdrawInfoBar from "@/components/fund-detail/withdraw/WithdrawInfoBar.jsx";

const Styled = {
  Container: styled.div``,
  TitleBar: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.div`
    padding-right: 0.5rem;
    .title {
      padding-bottom: 0.5rem;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .description {
      font-size: 0.75rem;
    }
  `,
  TotalMoneyBar: styled.div`
    padding: 1.5rem 0 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${({ theme }) => theme.border.strong};

    font-size: 1.25rem;
    font-weight: 600;
    .left-money {
      color: ${({ theme }) => theme.color.mainRed};
    }
  `,
};

function Withdraw({ isOrganizer }) {
  const leftMoney = 1000000;
  return (
    <Styled.Container>
      <Styled.TitleBar>
        <Styled.Title>
          <div className="title">출금내역</div>
          <div className="description">
            해당 내역을 클릭하면 자세한 사용 내역을 확인할 수 있어요
          </div>
        </Styled.Title>
        {isOrganizer && <Button>출금하기</Button>}
      </Styled.TitleBar>

      <Styled.TotalMoneyBar>
        <div className="description">남은 금액</div>
        <div className="left-money">{leftMoney.toLocaleString("ko-KR")}원</div>
      </Styled.TotalMoneyBar>

      <WithdrawInfoBar />
      {/*<WithdrawInfoBar />*/}
      {/*<WithdrawInfoBar />*/}
      {/*<WithdrawInfoBar />*/}
    </Styled.Container>
  );
}

export default Withdraw;
