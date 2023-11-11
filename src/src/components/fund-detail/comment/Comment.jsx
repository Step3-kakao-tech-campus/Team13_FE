import styled from "styled-components";
import TestAccountIcon from "@/assets/icon/TestAccountIcon";
import { useState } from "react";
import ReplyInput from "@/components/fund-detail/comment/ReplyInput.jsx";
import { useNavigate } from "react-router-dom";
import formatDateToYYYYMMDD from "@/utils/formateDateToYYYYMMDD.js";

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

  TextBox: styled.div`
    padding-bottom: 0.5rem;
    .top {
      margin-bottom: 0.25rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .date {
      margin-left: 0.25rem;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.addition};
    }

    .writer-name {
      font-weight: 500;
    }
  `,

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

function Comment({
  commentId,
  writerId,
  writerName,
  writerProfile,
  content,
  replyCount,
  createdAt,
}) {
  const [isReplyInputOpen, setIsReplyInputOpen] = useState(false);
  const navigate = useNavigate();
  const handleUserClick = () => {
    navigate(`routes/${writerId}`);
  };
  return (
    <>
      <Styled.CommentContainer>
        <Styled.UserProfileBox onClick={handleUserClick}>
          {writerProfile ? (
            <img src={writerProfile} alt={`프로필 사진`} />
          ) : (
            <TestAccountIcon />
          )}
        </Styled.UserProfileBox>

        <Styled.RightWrapper>
          <Styled.TextBox>
            <div className="top">
              <div className="writer-name">{writerName}</div>
              <div className="date">
                {formatDateToYYYYMMDD(new Date(createdAt))}
              </div>
            </div>
            <div className="content">{content}</div>
          </Styled.TextBox>
          <Styled.ButtonBox>
            <button
              className="open-reply-input"
              onClick={() => {
                setIsReplyInputOpen((prev) => !prev);
              }}
            >
              답글 {replyCount}
            </button>
          </Styled.ButtonBox>
          {isReplyInputOpen && <ReplyInput />}
        </Styled.RightWrapper>
      </Styled.CommentContainer>
    </>
  );
}

export default Comment;
