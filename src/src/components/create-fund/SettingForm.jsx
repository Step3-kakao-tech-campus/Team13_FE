import styled from "styled-components";
import { PropTypes } from "prop-types";
import AutoCelebSearch from "@/components/create-fund/AutoCelebSearch.jsx";

const Styled = {
  Target: styled.div`
    margin-bottom: 1rem;
    width: 100%;

    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 1rem;
    }
  `,
  InputBox: styled.div`
    position: relative;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    .krw {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      color: ${({ theme }) => theme.color.addition};
    }
  `,
  Label: styled.label`
    padding-bottom: 0.5rem;
    color: ${({ theme }) => theme.color.addition};
  `,
  Input: styled.input`
    padding: 0.75rem 1rem;
    width: 100%;
    height: 3rem;

    font-size: 1rem;
    font-family: ${({ theme }) => theme.fontFamily.main};

    border-radius: 0.25rem;
    border: ${({ theme }) => theme.border.main};

    &.target-money {
      padding-right: 2rem;
      text-align: right;
    }
  `,
  ErrorMessage: styled.div``,
};

/**
 * 펀딩 주최 펀딩 소개 작성 컴포넌트
 * @param {{targetMoney: string | number, dueDate: string, celebId: string || number, celebName: string }} input 소개 input 상태
 * @param {React.Dispatch.SetStateAction} setInput set 소개 input 상태
 */

function SettingForm({ input, setInput }) {
  const getNumber = (str) => {
    return str.replace(/\D/g, "");
  };

  const getValue = {
    targetMoney: (e) => {
      return +getNumber(e.target.value);
    },
    dueDate: (e) => {
      return e.target.value;
    },
  };

  const handleInputChange = (event, key) => {
    setInput((prev) => {
      return { ...prev, [key]: getValue[key](event) };
    });
  };

  return (
    <>
      <Styled.Target>
        <Styled.InputBox>
          <Styled.Label>목표 금액</Styled.Label>
          <Styled.Input
            type="text"
            className="target-money"
            value={input.targetMoney.toLocaleString()}
            onInput={(e) => handleInputChange(e, "targetMoney")}
          />
          <div className="krw">원</div>
        </Styled.InputBox>

        <Styled.InputBox>
          <Styled.Label>마감 날짜</Styled.Label>
          <Styled.Input
            type="date"
            value={input.dueDate}
            onInput={(e) => handleInputChange(e, "dueDate")}
          />
        </Styled.InputBox>
      </Styled.Target>

      <Styled.InputBox>
        <Styled.Label>셀럽</Styled.Label>
        <AutoCelebSearch input={input} setInput={setInput} />
      </Styled.InputBox>
    </>
  );
}

SettingForm.propTypes = {
  input: PropTypes.shape({
    targetMoney: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    dueDate: PropTypes.string,
    celebId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    celebName: PropTypes.string,
  }),
  setInput: PropTypes.func.isRequired,
};

export default SettingForm;
