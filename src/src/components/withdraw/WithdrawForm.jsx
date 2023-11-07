import styled from "styled-components";
import Button from "@/components/common/button/Button.jsx";
import { useState } from "react";
import { NumericFormat, PatternFormat } from "react-number-format";
import useFundWithdrawMutation from "@/hooks/api/fund/useFundWithdrawMutation.js";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import UseFundBalanceQuery from "@/hooks/api/fund/useFundBalanceQuery.js";

const Styled = {
  InputWrapper: styled.div`
    margin: 2rem 0;
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    background-color: ${({ theme }) => theme.color.white};
    border-radius: 0.25rem;
    border: ${({ theme }) => theme.border.main};

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  `,
  LabeledInput: styled.div`
    padding: 1rem;

    background-color: ${({ theme }) => theme.color.bg};
    border-radius: 0.25rem;

    label {
      font-weight: 500;
    }
  `,
  InputBox: styled.div`
    margin-top: 0.75rem;
    padding: 0.5rem;
    width: 100%;

    font-size: 1.25rem;
    font-weight: 500;

    border: none;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.color.white};

    input {
      width: 90%;
      font-size: 1.25rem;
      font-weight: 500;
      border: none;

      &::placeholder {
        color: ${({ theme }) => theme.color.inactive};
      }
    }

    .left-money,
    .money {
      text-align: right;
    }
  `,
};

function WithdrawForm() {
  const { fundId } = useParams();
  const { data: balanceMoney } = UseFundBalanceQuery({ fundId });
  const [formInfo, setFormInfo] = useState({
    account: "",
    usage: "",
    money: 0,
  });

  const { mutate } = useFundWithdrawMutation({ fundId });

  const handleSubmit = () => {
    if (formInfo.account.length !== 15) {
      return toast.error("계좌번호를 정확히 입력해주세요");
    }

    if (!formInfo.usage) {
      return toast.error("사용처를 입력해주세요");
    }

    if (!formInfo.money) {
      return toast.error("출금 금액을 입력해주세요");
    }

    if (parseInt(formInfo.money?.replace(/,/g, ""), 10) > balanceMoney) {
      return toast.error("신청한 출금 금액이 남은 금액보다 큽니다");
    }

    mutate({
      usage: formInfo.usage,
      depositAccount: formInfo.account?.replace(/\s/g, "-"),
      amount: parseInt(formInfo.money?.replace(/,/g, "")),
    });
  };

  return (
    <>
      <Styled.InputWrapper>
        <Styled.LabeledInput>
          <label>남은 금액</label>
          <Styled.InputBox>
            <div className="left-money">
              {balanceMoney?.toLocaleString("ko-KR")} 원
            </div>
          </Styled.InputBox>
        </Styled.LabeledInput>

        <Styled.LabeledInput>
          <label>입금 계좌 입력</label>
          <Styled.InputBox>
            <PatternFormat
              placeholder="0000 00 0000000"
              format="#### ## #######"
              className="account"
              value={formInfo.account}
              onChange={(e) => {
                setFormInfo((prev) => {
                  return { ...prev, account: e.target.value };
                });
              }}
            />
          </Styled.InputBox>
        </Styled.LabeledInput>

        <Styled.LabeledInput>
          <label>어디에 사용하나요?</label>
          <Styled.InputBox>
            <input
              className="usage"
              placeholder="강남역 스크린도어"
              value={formInfo.usage}
              onChange={(e) => {
                setFormInfo((prev) => {
                  return { ...prev, usage: e.target.value };
                });
              }}
            />
          </Styled.InputBox>
        </Styled.LabeledInput>

        <Styled.LabeledInput>
          <label>얼마가 필요하신가요?</label>
          <Styled.InputBox>
            <NumericFormat
              thousandSeparator=","
              placeholder="2,000,000"
              className="money"
              value={formInfo.money || null}
              onChange={(e) => {
                setFormInfo((prev) => {
                  return { ...prev, money: e.target.value };
                });
              }}
            />
            원
          </Styled.InputBox>
        </Styled.LabeledInput>
      </Styled.InputWrapper>

      <Button
        onClick={handleSubmit}
        style={{ width: "100%", padding: "0.75rem" }}
      >
        출금 신청
      </Button>
    </>
  );
}

export default WithdrawForm;
