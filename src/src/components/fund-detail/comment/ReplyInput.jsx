import styled from "styled-components";
import Button from "@/components/common/button/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import { useRef } from "react";

const Styled = {
  Container: styled.div`
    margin-top: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  `,
  Input: styled.input`
    margin-right: 1rem;
    padding: 0.5rem 0.25rem;
    width: calc(100% - 2rem);
    font-size: 1rem;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.inactive};

    transition: border 0.25s ease-in-out;

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.color.mainRed};
    }
  `,
  ButtonWrapper: styled.div``,
};

function ReplyInput() {
  const inputRef = useRef();

  const postReply = () => {
    try {
      console.log(inputRef.current.value);
      inputRef.current.value = "";
    } catch (e) {}
  };

  return (
    <Styled.Container>
      <Styled.Input ref={inputRef} placeholder="답글 작성..." />
      <Styled.ButtonWrapper>
        <Button
          onClick={postReply}
          style={{
            fontSize: "0.9rem",
            padding: "0.25rem 0.5rem",
            borderRadius: "9999px",
          }}
          styleType={BUTTON_TYPE.SECONDARY}
        >
          작성
        </Button>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
}

export default ReplyInput;
