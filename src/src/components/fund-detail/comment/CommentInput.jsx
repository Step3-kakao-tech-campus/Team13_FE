import styled from "styled-components";
import Button from "@/components/common/button/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import { useRef } from "react";
import handleEnterKeyDown from "@/utils/handleEnterKeyDown.js";
import usePostCommentMutation from "@/hooks/api/fund/usePostCommentMutation.js";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import routes from "@/constants/routes.js";

const Styled = {
  Wrapper: styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
};

function CommentInput() {
  const inputRef = useRef();
  const { fundId } = useParams();
  const { mutate } = usePostCommentMutation(fundId);
  const navigate = useNavigate();

  const postComment = () => {
    try {
      console.log(inputRef.current.value);
      mutate(inputRef.current.value);
      inputRef.current.value = "";
    } catch (e) {
      toast.error("댓글 작성을 실패했습니다");

      if (!localStorage.getItem("accessToken")) {
        navigate(routes.signIn);
      }
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Input
        ref={inputRef}
        type="text"
        placeholder="댓글 작성..."
        onKeyDown={(event) => handleEnterKeyDown(event, postComment)}
      />
      <Button
        onClick={postComment}
        styleType={BUTTON_TYPE.PRIMARY}
        style={{ right: "1rem", top: "0.5rem", borderRadius: "9999px" }}
      >
        댓글
      </Button>
    </Styled.Wrapper>
  );
}

export default CommentInput;
