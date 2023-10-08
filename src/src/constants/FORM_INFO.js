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

const MY_ACCOUNT = [
  {
    id: "nickname",
    label: "닉네임",
    type: "text",
    placeholder: "홍길동",
    validation: {
      required: "닉네임은 필수 입력입니다",
    },
  },
  {
    id: "phoneNumber",
    label: "전화번호",
    type: "text",
    placeholder: "010-1234-5678",
    validation: {
      required: "전화번호는 필수 입력입니다.",
      onChange: (e) => {
        if (e.target.value.length > 11) {
          e.target.value = e.target.value.substr(0, 13);
        }

        e.target.value = e.target.value
          .replace(/[^0-9]/g, "")
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
          .replace(/(-{1,2})$/g, "");
      },
    },
    requireMsg: "전화번호는 숫자로만 입력해 주세요",
  },
  {
    id: "currentPassword",
    label: "현재 비밀번호",
    type: "password",
    placeholder: "현재 비밀번호",
    validation: {
      required: "현재 비밀번호는 필수 입력입니다",
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
      required: "변경할 비밀번호는 필수 입력입니다",
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
export default { SIGN_IN, MY_ACCOUNT };
