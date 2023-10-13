import styled from "styled-components";
import { PropTypes } from "prop-types";
import SignUpIcon from "@/assets/icon/SignUpIcon.jsx";

const Styled = {
  Button: styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;

    padding: 0.75rem 1rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: ${({ theme }) => theme.color.white};
    border-radius: 9999px;
    box-shadow: 0 2px 21px 0 rgba(0, 0, 0, 0.2);

    text-align: center;
    line-height: normal;
  `,
  Icon: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding-right: 0.25rem;
  `,
};

/**
 * 화면에 고정된 플로팅 버튼 공통 컴포넌트
 * @param {React.ReactNode} children 버튼 내 글자
 * @param {React.htmlAttributes} htmlButtonProps 기타 버튼 props
 */

function FloatButton({ children, ...htmlButtonProps }) {
  return (
    <Styled.Button {...htmlButtonProps}>
      <Styled.Icon>
        <SignUpIcon />
      </Styled.Icon>
      <div>{children}</div>
    </Styled.Button>
  );
}

FloatButton.propTypes = {
  children: PropTypes.node,
};

export default FloatButton;
