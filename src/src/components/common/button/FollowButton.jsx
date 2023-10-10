import styled, { css } from "styled-components";
import { PropTypes } from "prop-types";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";

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
 * 공통 버튼 컴포넌트
 * @param {node} children
 * @param {string} styleType 버튼 스타일 타입 BUTTON_TYPE.[PRIMARY || SECONDARY || TERTIARY]
 * @param {boolean} isHoverStyle hover 스타일링 적용 여부
 * @param {boolean} isFollowing 팔로잉 여부
 * @param {number} celebId 셀럽 아이디
 * @param props 기타
 */

function FollowButton({ children, styleType, isHoverStyle, celebId, isFollowing }) {
    return (
        <Styled.Button
          $styleType={styleType}
          $isHoverStyle={isHoverStyle}
          $celebId={celebId}
          $isFollowing={isFollowing}
        >
          {children}
        </Styled.Button>
      );
}

export default FollowButton;
