const SIGN_IN = [
  {
    id: "email",
    type: "text",
    placeholder: "kakao@jnu.ac.kr",
    validation: {
      required: "이메일은 필수입력 입니다",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "이메일 형식에 맞지 않습니다",
      },
    },
  },
  {
    id: "password",
    type: "password",
    placeholder: "8~20자 공백없이 영문/숫자/특수문자 포함",
    validation: {
      required: "비밀번호는 필수입력 입니다",
      pattern: {
        value:
          /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=\-{}[\]|\\:;"'<>,.?/~`])[\S]{8,20}$/,
        message: "영문, 숫자, 특수문자 모두 포함해주세요!",
      },
      minLength: { value: 8, message: "비밀번호는 8글자 이상입니다" },
      maxLength: { value: 20, message: "비밀번호는 20글자 이내입니다" },
    },
  },
];

Object.freeze(SIGN_IN);
export default { SIGN_IN };
