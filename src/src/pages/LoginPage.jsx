import { useNavigate } from "react-router-dom";
import routes from "@/constants/routes.js";
import styled from "styled-components";

import Button from "@/components/common/Button.jsx";
import Form from "@/components/common/form/Form.jsx";

const Styled = {
  LoginContainer: styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    margin: 9rem 0;
  `,
  LoginTitle: styled.h1`
    font-size: 1.75rem;
    font-weight: bold;
    text-align: left;
  `,
  BottomMsg: styled.div`
    font-size: 0.75rem;
    display: flex;
    justify-content: center;
    padding: 0.75rem;

    & span {
      color: ${({ theme }) => theme.color.mainRed};
      display: block;
      margin-left: 0.25rem;
      cursor: pointer;
    }
  `,
};

function LoginPage() {
  const navigate = useNavigate();

  const loginDefault = {
    email: "",
    password: "",
  };

  const loginInfo = [
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

  return (
    <Styled.LoginContainer>
      <div
        style={{
          width: "22rem",
        }}
      >
        <Styled.LoginTitle>로그인</Styled.LoginTitle>
        <Form
          onSubmit={(data) => console.log(data)}
          onError={(err) => console.log(err)}
          inputInformations={loginInfo}
          defaultValues={loginDefault}
        />
        <Button
          style={{
            width: "100%",
            padding: "1rem",
            margin: "0.375rem 0",
          }}
        >
          로그인
        </Button>
        <Button
          style={{
            width: "100%",
            padding: "1rem",
            margin: "0.375rem 0",
            backgroundColor: "#FFEB02",
            color: "#000000",
            fontWeight: "bold",
          }}
        >
          카카오 간편 로그인
        </Button>
        <Styled.BottomMsg>
          아직 펀더링 계정이 없으신가요?
          <span onClick={() => navigate(routes.signUp)}>회원가입</span>
        </Styled.BottomMsg>
      </div>
    </Styled.LoginContainer>
  );
}

export default LoginPage;
