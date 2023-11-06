import styled from "styled-components";
import { Suspense, useState } from "react";

import { Title } from "@/styles/CommonStyle";
import PageTitle from "@/components/common/PageTitle.jsx";
import FundSupportInfo from "@/components/fund-support/FundSupportInfo.jsx";
import FundSupportInfoSkeleton from "@/components/fund-support/FundSupportInfo.skeleton.jsx";
import CheckBox from "@/components/common/button/CheckBox.jsx";
import PaymentButton from "@/components/fund-support/PaymentButton.jsx";
import KakaopayIcon from "@/assets/icon/kakaopay_icon.png";

const Styled = {
  Container: styled.section`
    padding-top: 2rem;
  `,
  PriceSelectWrapper: styled.article`
    margin-top: 3rem;
    padding: 2rem;
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.main};

    .title {
      color: ${({ theme }) => theme.color.addition};
    }
  `,
  GridButtonBox: styled.div`
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;

    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr 1fr;
    }
  `,
  GridButton: styled.button`
    padding: 1rem;
    color: ${({ theme, $selected }) =>
      $selected ? theme.color.white : theme.color.body};
    background-color: ${({ theme, $selected }) =>
      $selected ? theme.color.mainRed : theme.color.white};
    border-radius: 0.25rem;
    border: ${({ theme, $selected }) =>
      $selected ? "none" : theme.border.main};
  `,
  PriceInput: styled.input`
    position: relative;
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border: ${({ theme }) => theme.border.main};
    border-radius: 0.25rem;
    color: ${({ $disabled, theme }) =>
      $disabled ? theme.color.addition : theme.color.body};
  `,
  AgreementWrapper: styled.section`
    margin: 3rem 0;
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.main};
  `,
  Agreement: styled.div`
    padding: 1rem 1.5rem;
    font-size: 0.85rem;
    line-height: 130%;

    &.title {
      padding: 1.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.25rem;
      font-weight: 600;
      border-bottom: ${({ theme }) => theme.border.main};
    }
  `,
  AgreeTopBox: styled.div`
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
  `,
  PaymentWrapper: styled.div`
    padding: 1rem;
    margin: 2rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.main};
    border-radius: 0.25rem;
  `,
  FinalPrice: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    .price {
      font-weight: 500;
      font-size: 1.25rem;
    }
  `,
};

function FundSupportPage() {
  const [selectedPrice, setSelectedPrice] = useState(5000);
  const [isPriceInput, setIsPriceInput] = useState(false);
  const [fundTitle, setFundTitle] = useState("");
  const [inputValue, setInputValue] = useState(0);
  const [agree, setAgree] = useState([false, false]);

  const finalPrice = isPriceInput ? inputValue : selectedPrice;

  return (
    <>
      <PageTitle title={"후원하기"} />
      <Styled.Container>
        <Title>펀딩 후원하기</Title>
        <Suspense fallback={<FundSupportInfoSkeleton />}>
          <FundSupportInfo setFundTitle={setFundTitle} />
        </Suspense>

        <Styled.PriceSelectWrapper>
          <div className="title">후원 금액</div>
          <Styled.GridButtonBox>
            {[5000, 10000, 15000, 20000, 50000].map((price, index) => (
              <Styled.GridButton
                key={index}
                $selected={price === selectedPrice}
                onClick={() => {
                  setSelectedPrice(price);
                  setIsPriceInput(false);
                }}
              >
                {price.toLocaleString("ko-KR")}원
              </Styled.GridButton>
            ))}
            <Styled.GridButton
              $selected={isPriceInput}
              onClick={() => {
                setSelectedPrice(0);
                setIsPriceInput(true);
              }}
            >
              직접 입력
            </Styled.GridButton>
          </Styled.GridButtonBox>

          {isPriceInput && (
            <Styled.PriceInput
              type="text"
              $disabled={!inputValue}
              value={inputValue.toLocaleString("ko-KR")}
              onInput={(e) => {
                const newPrice = Number(e.target.value.replace(/[^0-9]/g, ""));
                setInputValue(newPrice);
              }}
            />
          )}
        </Styled.PriceSelectWrapper>

        <Styled.AgreementWrapper>
          <Styled.Agreement className="title">
            <CheckBox
              id="all"
              checked={agree[0] && agree[1]}
              onChange={() => {
                if (agree[0] && agree[1]) {
                  return setAgree([false, false]);
                }
                setAgree([true, true]);
              }}
            />
            <div>전체 동의하기</div>
          </Styled.Agreement>

          <Styled.Agreement>
            <Styled.AgreeTopBox>
              <CheckBox
                id="co-admin"
                checked={agree[0]}
                onChange={() => {
                  setAgree((prev) =>
                    prev.map((x, i) => (i === 0 ? !prev[i] : prev[i])),
                  );
                }}
              />
              <div>공동관리자 참여 동의</div>
            </Styled.AgreeTopBox>
            <div>
              공동관리자로 펀딩에 참여하면 주최자가 출금 신청시, 해당 사유를
              확인하고 승인할 수 있습니다. 공동관리자는 지원자 중 펀딩 금액이
              많은 순서대로 3명을 선정합니다. 공동관리자는 주최자의 출금 신청을
              확인할 의무가 있습니다.
            </div>
          </Styled.Agreement>

          <Styled.Agreement>
            <Styled.AgreeTopBox>
              <CheckBox
                id="non-refund"
                checked={agree[1]}
                onChange={() => {
                  setAgree((prev) =>
                    prev.map((x, i) => (i === 1 ? !prev[i] : prev[i])),
                  );
                }}
              />
              <div>펀딩 후 환불 불가 및 결제 진행 동의</div>
            </Styled.AgreeTopBox>
            <div>펀딩이 완료되면 환불이 불가합니다.</div>
          </Styled.Agreement>
        </Styled.AgreementWrapper>

        <Styled.PaymentWrapper>
          <Styled.FinalPrice>
            <img
              src={KakaopayIcon}
              alt={"카카오페이 로고"}
              style={{ width: "4rem" }}
            />
            <div className="price">{finalPrice.toLocaleString("ko-KR")} 원</div>
          </Styled.FinalPrice>
          <PaymentButton
            disabled={!agree[0] || !agree[1]}
            price={finalPrice}
            fundTitle={fundTitle}
          />
        </Styled.PaymentWrapper>
      </Styled.Container>
    </>
  );
}

export default FundSupportPage;
