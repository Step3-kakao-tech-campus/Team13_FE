import styled from "styled-components";
import formatDateToYYYYMMDD from "@/utils/formateDateToYYYYMMDD";
import EvidenceIcon from "@/components/fund-detail/withdraw/EvidenceIcon.jsx";

const Styled = {
  Container: styled.div`
    margin: 1rem 0;
    width: 100%;
  `,
  Date: styled.div`
    padding-bottom: 0.25rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.color.addition};
  `,
  Bar: styled.div`
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.main};
    border-radius: 0.25rem;
    cursor: pointer;
  `,
  EvidenceWrapper: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .usage-title {
      padding-left: 0.5rem;
      font-weight: 600;
    }
  `,
  EvidenceImg: styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
  `,
  MoneyWrapper: styled.div`
    .withdraw-money {
      padding-bottom: 0.25rem;
      font-weight: 600;
    }

    .total-money {
      text-align: right;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.inactive};
    }
  `,
};
function WithdrawInfoBar() {
  const date = new Date("2023-10-11");
  const usageTitle = "사용한 곳";
  // const evidenceUrl = "";
  const evidenceUrl =
    "https://media.istockphoto.com/id/1285504723/ko/%EB%B2%A1%ED%84%B0/%ED%8C%90%EB%A7%A4-%EC%98%81%EC%88%98%EC%A6%9D.jpg?s=612x612&w=0&k=20&c=xf9rUJXZ-BqwZKqnlL8QCeCCXdjGsVqfU5ZVsUjpnRs=";
  const withdrawMoney = 100000;
  const totalMoney = 500000;

  return (
    <Styled.Container>
      <Styled.Date>{formatDateToYYYYMMDD(date)}</Styled.Date>
      <Styled.Bar>
        <Styled.EvidenceWrapper>
          {evidenceUrl ? (
            <Styled.EvidenceImg
              src={evidenceUrl}
              alt={`${usageTitle} 증거 사진`}
            />
          ) : (
            <EvidenceIcon />
          )}
          <div className="usage-title">{usageTitle}</div>
        </Styled.EvidenceWrapper>
        <Styled.MoneyWrapper>
          <div className="withdraw-money">
            -{withdrawMoney.toLocaleString("ko-KR")}원
          </div>
          <div className="total-money">
            {totalMoney.toLocaleString("ko-KR")}원
          </div>
        </Styled.MoneyWrapper>
      </Styled.Bar>
    </Styled.Container>
  );
}

export default WithdrawInfoBar;
