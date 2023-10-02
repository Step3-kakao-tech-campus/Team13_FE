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

    ${({ isHoverStyle, type, theme }) =>
      type === BUTTON_TYPE.PRIMARY &&
      css`
        background-color: ${theme.color.mainRed};

        ${isHoverStyle &&
        css`
          &:hover {
            background-color: ${theme.color.mainRedHover};
          }
        `}
      `}

    ${({ isHoverStyle, type, theme }) =>
      type === BUTTON_TYPE.SECONDARY &&
      css`
        background-color: ${theme.color.secondaryRed};
        border: 1px solid ${theme.color.mainRed};
        color: ${theme.color.mainRed};

        ${isHoverStyle &&
        css`
          &:hover {
            background-color: ${theme.color.secondaryRedHover};
            color: ${theme.color.mainRed};
          }
        `}
      `}

    ${({ isHoverStyle, type, theme }) =>
      type === BUTTON_TYPE.TERTIARY &&
      css`
        background-color: ${theme.color.subBlack};

        ${isHoverStyle &&
        css`
          &:hover {
            background-color: ${theme.color.subBlackHover};
          }
        `}
      `}
  `,
};

function Button({ children, type, isHoverStyle, ...props }) {
  return (
    <Styled.Button type={type} isHoverStyle={isHoverStyle} {...props}>
      {children}
    </Styled.Button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  isHoverStyle: PropTypes.boolean,
};

Button.defaultProps = {
  type: BUTTON_TYPE.PRIMARY,
  isHoverStyle: true,
};

export default Button;
