import { useForm, FormProvider } from "react-hook-form";
import { PropTypes } from "prop-types";
import LabeledInput from "@/components/common/form/LabeledInput.jsx";

function Form({
  onSubmit,
  onError,
  defaultValues,
  inputInformations,
  children,
}) {
  const methods = useForm({ mode: "onChange", defaultValues: defaultValues });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {inputInformations.map((input) => (
          <LabeledInput
            key={input.id}
            id={input.id}
            type={input.type}
            label={input.label}
            placeholder={input.placeholder}
            validation={input.validation}
            errorMsg={errors?.[input.id]?.message}
            requireMsg={input?.requireMsg}
          />
        ))}
        {children}
      </form>
    </FormProvider>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onError: PropTypes.func,
  defaultValues: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
  inputInformations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      validation: PropTypes.shape({
        required: PropTypes.string,
        pattern: PropTypes.shape({
          value: PropTypes.any,
          message: PropTypes.string,
        }),
      }),
      requireMsg: PropTypes.string,
    })
  ),
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Form;
