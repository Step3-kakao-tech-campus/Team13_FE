import styled from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";
import { PropTypes } from "prop-types";

const Styled = {
  CommentContainer: styled.div`
    padding: 0.25rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
  `,

  UserProfileBox: styled.div`
    padding-right: 0.75rem;

    div {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 9999px;
      object-fit: cover;
      overflow: hidden;
      background-color: ${({ theme }) => theme.color.skeleton};
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
      overflow: hidden;
    }

    .date {
      margin-left: 0.25rem;
      width: 3rem;
      height: 0.75rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      border-radius: 0.25rem;
      overflow: hidden;
    }

    .writer-name {
      width: 3rem;
      height: 1rem;
      overflow: hidden;
      background-color: ${({ theme }) => theme.color.skeleton};
      border-radius: 0.25rem;
    }

    .content {
      width: 60%;
      height: 1rem;
      overflow: hidden;
      background-color: ${({ theme }) => theme.color.skeleton};
      border-radius: 0.25rem;
    }
  `,

  ButtonBox: styled.div`
    margin-bottom: 0.5rem;
    width: 100%;

    .open-reply-input {
      padding: 0.25rem 0.5rem;
      width: 2rem;
      height: 1rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      border-radius: 9999px;
      overflow: hidden;
    }
  `,
};

/**
 * 댓글 컴포넌트
 * @param {boolean} isReply
 * @param {React.useRef} loaderRef
 * @param {HTMLElement.Attribute} divProps
 */

function CommentSkeleton({ isReply = false, loaderRef, ...divProps }) {
  return (
    <Styled.CommentContainer ref={loaderRef} {...divProps}>
      <Styled.UserProfileBox>
        <div>
          <Shimmer />
        </div>
      </Styled.UserProfileBox>

      <Styled.RightWrapper>
        <Styled.TextBox>
          <div className="top">
            <div className="writer-name">
              <Shimmer />
            </div>
            <div className="date">
              <Shimmer />
            </div>
          </div>
          <div className="content">
            <Shimmer />
          </div>
        </Styled.TextBox>
        {isReply || (
          <Styled.ButtonBox>
            <button className="open-reply-input">
              <Shimmer />
            </button>
          </Styled.ButtonBox>
        )}
      </Styled.RightWrapper>
    </Styled.CommentContainer>
  );
}

CommentSkeleton.propTypes = {
  isReply: PropTypes.bool,
  loaderRef: PropTypes.any,
};

export default CommentSkeleton;
