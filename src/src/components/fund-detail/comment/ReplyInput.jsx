import { useRef } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { PropTypes } from "prop-types";

import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import routes from "@/constants/routes.js";
import Button from "@/components/common/button/Button.jsx";
import usePostReplyMutation from "@/hooks/api/fund/usePostReplyMutation.js";
import handleEnterKeyDown from "@/utils/handleEnterKeyDown.js";

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

/**
 * 대댓글 작성
 * @param {number} commentId
 */

function ReplyInput({ commentId }) {
  const inputRef = useRef();
  const { fundId } = useParams();
  const navigate = useNavigate();
  const { mutate } = usePostReplyMutation({ fundId, commentId });

  const postReply = () => {
    try {
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
    <Styled.Container>
      <Styled.Input
        ref={inputRef}
        placeholder="답글 작성..."
        onKeyDown={(event) => handleEnterKeyDown(event, postReply)}
      />
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

ReplyInput.propTypes = {
  commentId: PropTypes.number,
};

export default ReplyInput;
