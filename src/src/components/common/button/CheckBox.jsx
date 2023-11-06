import styled from "styled-components";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.div`
    width: 18px;
    height: 18px;
  `,
  Label: styled.label`
    position: relative;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    user-select: none;

    content: "";
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.inactive};
    border-radius: 0.25rem;

    cursor: pointer;

    &:after {
      opacity: 0;

      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 0.25rem;

      content: "";
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: ${({ theme }) => theme.color.mainRed};
    }
  `,
  CheckBox: styled.input`
    position: absolute;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;

    &:checked + label:after {
      opacity: 1;
    }

    &:checked + label {
      border: none;
    }
  `,
};

/**
 * 공통 체크박스 컴포넌트 - 라벨을 활용해 스타일링, 추가 라벨 금지
 * @param {number | string} id 다른 체크박스와 구분되어야 함
 * @param {React.htmlAttributes} checkboxProps 기타 체크박스 props
 */

function CheckBox({ id, ...checkboxProps }) {
  return (
    <Styled.Container>
      <Styled.CheckBox {...checkboxProps} id={id} name={id} type="checkbox" />
      <Styled.Label htmlFor={id} />
    </Styled.Container>
  );
}

CheckBox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CheckBox;
