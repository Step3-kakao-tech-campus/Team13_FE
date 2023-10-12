import { useFormContext } from "react-hook-form";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";

const Styled = {
  Container: styled.div`
    width: 100%;
    padding: 0.25rem 0;
  `,
  Input: styled.input`
    width: 100%;
    height: 3.25rem;
    padding: 1rem;
    margin: 0.5rem 0 0;
    border: 1px solid ${({ theme }) => theme.color.inactive};
    border-radius: 4px;

    ${({ $isMessage }) =>
      !$isMessage &&
      css`
        margin-bottom: 1rem;
      `}

    &::placeholder {
      color: ${({ theme }) => theme.color.inactive};
      font-size: 1rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
  Message: styled.div`
    height: 0.75rem;
    text-align: right;
    font-size: 0.75rem;
    font-weight: 400;
    margin-top: 4px;

    &.error-msg {
      color: ${({ theme }) => theme.color.mainRed};
    }

    &.require-msg {
      color: ${({ theme }) => theme.color.alertBlue};
    }
  `,
};

/**
 * LabeledInput - 라벨이 포함된 입력 폼 컴포넌트.
 * @param {string || number} id 인풋 아이디
 * @param {string || number} label 라벨
 * @param {string} type input의 type
 * @param {string} placeholder placeholder
 * @param {string} errorMsg 입력 유효성 검사 오류 메시지 (선택 사항)
 * @param {string} requireMsg 필수 입력 메시지 (선택 사항)
 * @param {object} validation 입력 유효성 검사 (React Hook Form의 register 함수와 함께 사용)
 * @param {React.ReactNode} htmlInputProps 전달되는 props
 */

function LabeledInput({
  id,
  label,
  type,
  placeholder,
  errorMsg,
  requireMsg,
  validation,
  ...htmlInputProps
}) {
  const { register, getValues } = useFormContext();

  return (
    <Styled.Container>
      <label htmlFor={id}>{label}</label>
      <Styled.Input
        id={id}
        type={type}
        autoComplete={type === "password" ? "off" : "on"}
        placeholder={placeholder}
        className={errorMsg && "error"}
        {...register(id, validation)}
        {...htmlInputProps}
        $isMessage={!getValues(id) || errorMsg}
      />
      {errorMsg ? (
        <Styled.Message className="error-msg">{errorMsg}</Styled.Message>
      ) : (
        !getValues(id) && (
          <Styled.Message className="require-msg">{requireMsg}</Styled.Message>
        )
      )}
    </Styled.Container>
  );
}

LabeledInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  errorMsg: PropTypes.string,
  requireMsg: PropTypes.string,
  validation: PropTypes.object,
};

LabeledInput.defaultProps = {
  id: "id-1",
  label: "",
  type: "text",
  placeholder: "placeholder",
  errorMsg: "",
  requireMsg: "",
  validation: undefined,
};

export default LabeledInput;
