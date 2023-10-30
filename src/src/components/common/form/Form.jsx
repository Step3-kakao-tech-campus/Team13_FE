import { useForm, FormProvider } from "react-hook-form";
import { PropTypes } from "prop-types";
import LabeledInput from "@/components/common/form/LabeledInput.jsx";

/**
 * Form - 입력폼 렌더링 및 관리
 * @param {function} onSubmit 폼 제출 이벤트 핸들러 함수
 * @param {function} onError 폼 제출 에러 이벤트 핸들러 함수
 * @param {object|function} defaultValues 입력 요소의 기본값을 설정하는 객체 또는 함수
 * @param {Array.<{id: string | number, label: string | number, type: string, placeholder: string, validation: Object, requireMsg: string}>} inputInformations 입력 요소에 대한 정보를 포함하는 배열
 * @param {React.ReactNode} children - 자식 컴포넌트 (선택 사항)
 */

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
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        style={{ width: "100%", maxWidth: "22rem" }}
      >
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
      id: PropTypes.string,
      type: PropTypes.string,
      placeholder: PropTypes.string,
      validation: PropTypes.object,
      requireMsg: PropTypes.string,
    }),
  ),
  style: PropTypes.object,
  children: PropTypes.node,
};

Form.defaultProps = {
  defaultValues: { userId: "" },
  inputInformations: [
    {
      id: "userId",
      label: "아이디",
      type: "text",
      placeholder: "placeholder",
      validation: { required: "입력해 주세요" },
      requireMsg: null,
    },
  ],
  style: {},
  children: null,
};

export default Form;
