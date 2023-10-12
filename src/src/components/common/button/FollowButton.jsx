import styled, { css } from "styled-components";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import Button from "./Button.jsx";

const Styled = {
  Button: styled.button`
    padding: 0.5rem 1rem;

    color: ${({ theme }) => theme.color.white};

    border-radius: 0.25rem;

    &:hover {
      transition: all ease-in-out 0.2s;
    }

    ${({ $isHoverStyle, $styleType, theme }) =>
      $styleType === BUTTON_TYPE.PRIMARY &&
      css`
        background-color: ${theme.color.mainRed};

        ${$isHoverStyle &&
        css`
          &:hover {
            background-color: ${theme.color.mainRedHover};
          }
        `}
      `}

      ${({ $isHoverStyle, $styleType, theme }) =>
      $styleType === BUTTON_TYPE.SECONDARY &&
      css`
        background-color: ${theme.color.secondaryRed};
        border: 1px solid ${theme.color.mainRed};
        color: ${theme.color.mainRed};

        ${$isHoverStyle &&
        css`
          &:hover {
            background-color: ${theme.color.secondaryRedHover};
            color: ${theme.color.mainRed};
          }
        `}
      `}
  `,
};

/**
 * 팔로우 버튼 컴포넌트
 * @param {node} children
 * @param {string} styleType 버튼 스타일 타입 BUTTON_TYPE.[PRIMARY || SECONDARY || TERTIARY]
 * @param {boolean} isHoverStyle hover 스타일링 적용 여부
 * @param {number} celebId 셀럽 아이디
 * @param {boolean} isFollowing 팔로잉 여부
 * @param props 기타
 */

function FollowButton({ children, styleType, isHoverStyle, celebId, isFollowing, ...props }) {
    
  const handleButtonClick = () => {
    // 팔로우 버튼 클릭 시 로직
    console.log('click!')
  }
  return (
        <Button 
          styleType={styleType}
          isHoverStyle={isHoverStyle}
          onClick={handleButtonClick}
          {...props}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      );
}

export default FollowButton;
