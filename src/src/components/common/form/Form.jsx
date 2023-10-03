import { useForm, FormProvider } from "react-hook-form";
import LabeledInput from "@/components/common/form/LabeledInput";

function Form({
  onSubmit,
  onError,
  defaultValues,
  inputInformations,
  children,
}) {
  const methods = useForm({ mode: "onTouched", defaultValues: defaultValues });
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

export default Form;
