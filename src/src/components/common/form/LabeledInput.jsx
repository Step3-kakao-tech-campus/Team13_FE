import { useFormContext } from "react-hook-form";

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
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={errorMsg && "error"}
        {...register(id, validation)}
        {...props}
      />
      {errorMsg ? (
        <div className="error-msg">{errorMsg}</div>
      ) : (
        !getValues(id) && <div className="require-msg">{requireMsg}</div>
      )}
    </div>
  );
}

export default LabeledInput;
