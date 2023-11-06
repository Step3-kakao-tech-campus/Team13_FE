import styled from "styled-components";
import Button from "@/components/common/button/Button.jsx";
import WithdrawInfoBar from "@/components/fund-detail/withdraw/WithdrawInfoBar.jsx";
import { EpochSecondToDateObject } from "@/utils/EpochConverter.js";
import { PropTypes } from "prop-types";

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

const withdrawInfo1 = {
  withdrawId: 1,
  usage: "강남역 스크린도어",
  withdrawAmount: 2_000_000,
  balance: 5_000_000,
  evidenceUrl:
    "https://media.istockphoto.com/id/1285504723/ko/%EB%B2%A1%ED%84%B0/%ED%8C%90%EB%A7%A4-%EC%98%81%EC%88%98%EC%A6%9D.jpg?s=612x612&w=0&k=20&c=xf9rUJXZ-BqwZKqnlL8QCeCCXdjGsVqfU5ZVsUjpnRs=",
  withdrawTime: 1699017340,
};

const withdrawInfo2 = {
  withdrawalId: 2,
  usage: "신사역 스크린도어",
  withdrawAmount: 1_000_000,
  balance: 2_000_000,
  evidenceUrl: null,
  withdrawTime: 1699017340,
};

function Withdraw({ isOrganizer }) {
  const leftMoney = 1000000;
  return (
    <Styled.Container>
      <Styled.TitleBar>
        <Styled.Title>
          <div className="title">출금내역</div>
          <div className="description">
            해당 내역을 클릭하면 자세한 사용 내역 이미지를 확인할 수 있어요
          </div>
        </Styled.Title>
        {isOrganizer && <Button>출금하기</Button>}
      </Styled.TitleBar>

      <Styled.TotalMoneyBar>
        <div className="description">남은 금액</div>
        <div className="left-money">{leftMoney.toLocaleString("ko-KR")}원</div>
      </Styled.TotalMoneyBar>

      {[withdrawInfo1, withdrawInfo2, withdrawInfo1, withdrawInfo2].map(
        (info, index) => (
          <WithdrawInfoBar
            key={index}
            isOrganizer={isOrganizer}
            id={info?.withdrawId}
            date={EpochSecondToDateObject(info?.withdrawTime)}
            usageTitle={info?.usage}
            evidenceUrl={info?.evidenceUrl}
            withdrawMoney={info?.withdrawAmount}
            totalMoney={info?.balance}
          />
        ),
      )}
    </Styled.Container>
  );
}

Withdraw.propTypes = {
  isOrganizer: PropTypes.bool,
};

export default Withdraw;
