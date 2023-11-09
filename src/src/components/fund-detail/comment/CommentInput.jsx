import styled from "styled-components";
import Button from "@/components/common/button/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import { useRef } from "react";
import handleEnterKeyDown from "@/utils/handleEnterKeyDown.js";

const Styled = {
  Wrapper: styled.div`
    position: relative;
    padding: 1rem;
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 0.25rem;
    border: 1px solid ${({ theme }) => theme.color.subBlack};
  `,
  Input: styled.input`
    width: calc(100% - 5rem);
    font-size: 1rem;
    border: none;
  `,
};

function CommentInput() {
  const inputRef = useRef();

  const postComment = () => {
    try {
      console.log(inputRef.current.value);
      inputRef.current.value = "";
    } catch (e) {}
  };

  return (
    <Styled.Wrapper>
      <Styled.Input
        ref={inputRef}
        type="text"
        onKeyDown={(event) => handleEnterKeyDown(event, postComment)}
      />
      <Button
        onClick={postComment}
        styleType={BUTTON_TYPE.TERTIARY}
        style={{ position: "absolute", right: "1rem", top: "0.5rem" }}
      >
        댓글
      </Button>
    </Styled.Wrapper>
  );
}

export default CommentInput;
