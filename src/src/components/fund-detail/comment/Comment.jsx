import styled from "styled-components";
import TestAccountIcon from "@/assets/icon/TestAccountIcon";
import { useState } from "react";
import ReplyInput from "@/components/fund-detail/comment/ReplyInput.jsx";

const Styled = {
  CommentContainer: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  `,

  UserProfileBox: styled.div`
    padding-right: 0.75rem;

    img {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 9999px;
      object-fit: cover;
    }
  `,

  RightWrapper: styled.div`
    width: 100%;
  `,

  TextBox: styled.div``,

  ButtonBox: styled.div`
    width: 100%;

    .open-reply-input {
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
      font-weight: 500;
      color: ${({ theme }) => theme.color.alertBlue};
      background-color: #e7f3ff;
      border: 1px solid ${({ theme }) => theme.color.alertBlue};
      border-radius: 9999px;
    }
  `,
};

function Comment() {
  const profileUrl =
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg";

  const [isReplyInputOpen, setIsReplyInputOpen] = useState(false);

  return (
    <>
      <Styled.CommentContainer>
        <Styled.UserProfileBox>
          {profileUrl ? (
            <img src={profileUrl} alt={`프로필 사진`} />
          ) : (
            <TestAccountIcon />
          )}
        </Styled.UserProfileBox>

        <Styled.RightWrapper>
          <Styled.TextBox>d</Styled.TextBox>
          <Styled.ButtonBox>
            <button
              className="open-reply-input"
              onClick={() => {
                setIsReplyInputOpen((prev) => !prev);
              }}
            >
              답글 {isReplyInputOpen ? "닫기" : "보기"}
            </button>
          </Styled.ButtonBox>
          {isReplyInputOpen && <ReplyInput />}
        </Styled.RightWrapper>
      </Styled.CommentContainer>
    </>
  );
}

export default Comment;
