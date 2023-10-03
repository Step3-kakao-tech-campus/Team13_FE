import { useFormContext } from "react-hook-form";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const Styled = {
  Container: styled.div`
    width: 22rem;
    margin: 1rem 0;
  `,
  Input: styled.input`
    width: 100%;
    height: 3.25rem;
    padding: 1rem;
    margin: 0.5rem 0 0;
    border: 1px solid ${({ theme }) => theme.color.inactive};
    border-radius: 4px;

    &::placeholder {
      color: ${({ theme }) => theme.color.inactive};
      font-size: 1rem;
    }

    &:focus {
    }
  `,

  Message: styled.div`
    height: 0.8rem;
    text-align: right;
    font-size: 0.85rem;
    font-weight: 400;
    margin-top: 4px;

    &.error-msg {
      color: ${({ theme }) => theme.color.mainRed};
    }

    &.require-msg {
      color: ${({ theme }) => theme.color.mainRed};
    }
  `,
};

function LabeledInput({
  id,
  label,
  type,
  placeholder,
  errorMsg,
  requireMsg,
  validation,
  ...props
}) {
  const { register, getValues } = useFormContext();

  return (
    <Styled.Container>
      <label htmlFor={id}>{label}</label>
      <Styled.Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={errorMsg && "error"}
        {...register(id, validation)}
        {...props}
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

export default LabeledInput;
