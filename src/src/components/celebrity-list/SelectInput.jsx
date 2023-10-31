import styled from "styled-components";
import { PropTypes } from "prop-types";

const Styled = {
  SelectContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Label: styled.label`
    padding-bottom: 0.5rem;
    font-size: 1rem;
  `,
  Select: styled.select`
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    color: ${({ value, theme }) =>
      value === "" ? theme.color.inactive : theme.color.body};

    border: ${({ theme }) => theme.border.input};
    outline: none;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url("https://img.icons8.com/material/24/aaaaaa/expand-arrow--v1.png")
      no-repeat center right 5px;
  `,
};

/**
 * 셀럽 신청 모달에 사용되는 셀렉트(드롭다운) 컴포넌트
 * @param {Object<label: string, value: string>} options 셀렉트 옵션 목록
 * @param {string} label 셀렉트 필드의 레이블
 * @param {function} onChange 옵션 선택이 변경될 때 호출되는 함수
 * @param {string} selectedValue 현재 선택된 옵션의 값
 */

function SelectInput({ options, label, onChange, selectedValue }) {
  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <Styled.SelectContainer>
      <Styled.Label htmlFor="select">{label}</Styled.Label>
      <Styled.Select
        id="select"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="" disabled={true}>
          선택하세요
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Styled.Select>
    </Styled.SelectContainer>
  );
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SelectInput;
