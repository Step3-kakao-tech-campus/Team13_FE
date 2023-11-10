import authAPI from "@/api/authAPI.js";

const SIGN_IN = [
  {
    id: "email",
    type: "text",
    placeholder: "kakao@jnu.ac.kr",
    validation: {
      required: "이메일은 필수 입력입니다",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "이메일 형식에 맞지 않습니다",
      },
    },
  },
  {
    id: "password",
    type: "password",
    placeholder: "8~20자 공백 없이 영문/숫자/특수문자 포함",
    validation: {
      required: "비밀번호는 필수 입력입니다",
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

const SIGN_UP = [
  {
    id: "email",
    label: "이메일",
    type: "text",
    placeholder: "이메일 계정",
    validation: {
      required: "이메일을 입력해 주세요",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "이메일 형식을 작성해 주세요",
      },
      validate: {
        isEmailDuplicate: async (value) => {
          if (value.length <= 2) {
            return;
          }

          try {
            await authAPI.isEmailDuplicate({ email: value });
          } catch (e) {
            if (e.response.data.error.message === "이메일이 존재합니다.") {
              return "펀더링에 가입된 이메일입니다";
            }
          }
        },
      },
    },
  },
  {
    id: "nickname",
    label: "닉네임",
    type: "text",
    placeholder: "닉네임 입력(특수문자 제외, 6글자 이내)",
    validation: {
      required: "닉네임을 입력해주세요",
      pattern: {
        value: /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/,
        message: "특수문자를 제외하고 입력해주세요",
      },
      maxLength: { value: 15, message: "15글자 이내로 입력해주세요!" },
    },
  },
  {
    id: "password",
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호 입력",
    validation: {
      required: "비밀번호는 필수입력입니다",
      pattern: {
        value:
          /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=\-{}[\]|\\:;"'<>,.?/~`])[\S]{8,20}$/,
        message: "영문, 숫자, 특수문자 모두 포함해주세요!",
      },
      minLength: { value: 8, message: "비밀번호는 8글자 이상입니다" },
      maxLength: { value: 20, message: "비밀번호는 20글자 이내입니다" },
    },
    requireMsg: "8~20자 공백 없이 영문/숫자/특수문자 포함",
  },
];

const MY_ACCOUNT = [
  {
    id: "nickname",
    label: "닉네임",
    type: "text",
    validation: {
      disabled: true,
    },
  },
  {
    id: "phoneNumber",
    label: "전화번호",
    type: "text",
    validation: {
      disabled: true,
    },
  },
  {
    id: "currentPassword",
    label: "현재 비밀번호",
    type: "password",
    placeholder: "현재 비밀번호",
    validation: {
      pattern: {
        value:
          /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=\-{}[\]|\\:;"'<>,.?/~`])[\S]{8,20}$/,
        message: "영문, 숫자, 특수문자 모두 포함해주세요!",
      },
      minLength: { value: 8, message: "비밀번호는 8글자 이상입니다" },
      maxLength: { value: 20, message: "비밀번호는 20글자 이내입니다" },
    },
  },
  {
    id: "changedPassword",
    label: "변경할 비밀번호",
    type: "password",
    placeholder: "변경할 비밀번호",
    validation: {
      pattern: {
        value:
          /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=\-{}[\]|\\:;"'<>,.?/~`])[\S]{8,20}$/,
        message: "영문, 숫자, 특수문자 모두 포함해주세요!",
      },
      minLength: { value: 8, message: "비밀번호는 8글자 이상입니다" },
      maxLength: { value: 20, message: "비밀번호는 20글자 이내입니다" },
    },
    requireMsg: "8~20자 공백 없이 영문/숫자/특수문자 포함",
  },
];

Object.freeze(SIGN_IN);
Object.freeze(MY_ACCOUNT);
Object.freeze(SIGN_UP);

export default { SIGN_IN, SIGN_UP, MY_ACCOUNT };
