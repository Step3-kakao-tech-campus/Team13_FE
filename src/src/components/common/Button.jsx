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

    ${({ $isHoverStyle, $styleType, theme }) =>
      $styleType === BUTTON_TYPE.TERTIARY &&
      css`
        background-color: ${theme.color.subBlack};

        ${$isHoverStyle &&
        css`
          &:hover {
            background-color: ${theme.color.subBlackHover};
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
 * @param props 기타
 */

function Button({ children, styleType, isHoverStyle, ...props }) {
  return (
    <Styled.Button
      $styleType={styleType}
      $isHoverStyle={isHoverStyle}
      {...props}
    >
      {children}
    </Styled.Button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  styleType: PropTypes.string,
  isHoverStyle: PropTypes.bool,
};

Button.defaultProps = {
  styleType: BUTTON_TYPE.PRIMARY,
  isHoverStyle: true,
};

export default Button;
