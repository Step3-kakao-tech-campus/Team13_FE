import styled from "styled-components";

import Celeb from "@/assets/celebinfo-card/Celeb.jsx";
import InProgress from "@/assets/icon/InProgressIcon.jsx";
import Money from "@/assets/icon/MoneyIcon.jsx";
import User from "@/assets/icon/UserIcon.jsx";
import Button from "@/components/common/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";

const Styled = {
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    padding: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,

  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  `,

  Text: styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: ${({ main }) => (main ? "1.25rem" : "0.5rem")};
    color: ${({ theme }) => theme.color.addition};

    .name {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  `,
};

// function CelebInfoGridCard({ children, ...props }) {
function CelebInfoGridCard() {
  return (
    <>
      <Styled.Container>
        <Celeb />
        <Styled.TextContainer>
          <Styled.Text main className="name">
            <span>손웅정</span>
            <Button
              style={{ marginLeft: "1rem" }}
              isHoverStyle={BUTTON_TYPE.PRIMARY}
            >
              팔로우
            </Button>
          </Styled.Text>
          <Styled.Text>
            <InProgress />
            <span>3개의 펀딩 진행 중</span>
          </Styled.Text>
          <Styled.Text>
            <Money />
            <span>총 2,000,000원</span>
          </Styled.Text>
          <Styled.Text>
            <User />
            <span>7명이 팔로우 중</span>
          </Styled.Text>
        </Styled.TextContainer>
      </Styled.Container>
    </>
  );
}

export default CelebInfoGridCard;
