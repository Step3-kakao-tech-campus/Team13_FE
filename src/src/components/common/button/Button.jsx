import styled from "styled-components";
import { PropTypes } from "prop-types";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";

const backgroundColor = {
  PRIMARY: theme => theme.color.mainRed,
  SECONDARY: theme => theme.color.secondaryRed,
  TERTIARY: theme => theme.color.subBlack,
};

const hoverBackgroundColor = {
  PRIMARY: theme => theme.color.mainRedHover,
  SECONDARY: theme => theme.color.secondaryRedHover,
  TERTIARY: theme => theme.color.subBlackHover,
};

const Styled = {
  Button: styled.button`
    padding: 0.5rem 1rem;

    color: ${({ $styleType, theme }) =>
      $styleType === BUTTON_TYPE.SECONDARY
        ? theme.color.mainRed
        : theme.color.white};

    border: ${({ $styleType, theme }) =>
      $styleType === BUTTON_TYPE.SECONDARY
        ? `1px solid ${theme.color.mainRed}`
        : "1px solid transparent"};
    border-radius: 0.25rem;

    background-color: ${({ $styleType, theme }) =>
      backgroundColor[$styleType](theme)};

    white-space: nowrap;

    &:hover {
      transition: all ease-in-out 0.2s;
      background-color: ${({ $useHoverStyle, $styleType, theme }) =>
        $useHoverStyle && hoverBackgroundColor[$styleType](theme)};
    }
  `,
};

/**
 * 공통 버튼 컴포넌트
 * @param {React.ReactNode} children
 * @param {string} styleType 버튼 스타일 타입 BUTTON_TYPE.[PRIMARY || SECONDARY || TERTIARY]
 * @param {boolean} useHoverStyle hover 스타일링 적용 여부
 * @param {React.htmlAttributes} htmlButtonProps 기타 버튼 props
 */

function Button({
  children,
  styleType = BUTTON_TYPE.PRIMARY,
  useHoverStyle = true,
  ...htmlButtonProps
}) {
  return (
    <Styled.Button
      $styleType={styleType}
      $useHoverStyle={useHoverStyle}
      {...htmlButtonProps}
    >
      {children}
    </Styled.Button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  styleType: PropTypes.string,
  useHoverStyle: PropTypes.bool,
};

export default Button;
