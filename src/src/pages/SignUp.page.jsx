import styled from "styled-components";

import Form from "@/components/common/form/Form.jsx";
import Button from "@/components/common/button/Button.jsx";

import FORM_INFO from "@/constants/FORM_INFO.js";
import FORM_DEFAULT from "@/constants/FORM_DEFAULT.js";
import { Title } from "@/styles/CommonStyle.js";
import useSignUpMutation from "@/hooks/api/auth/useSignUpMutation.js";

const Styled = {
  SignUpContainer: styled.div`
    margin-top: 4rem;
    padding: 0 calc((100vw - 22rem) / 2 - (100vw - 70rem) / 2 + 2rem);
    @media (max-width: 70rem) {
      padding: 0 calc((100vw - 22rem) / 2 - 2rem);
    }

    .email-check {
      display: flex;
    }
  `,
  SignUpTitle: styled(Title)`
    text-align: left;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  `,
  SignUpAgree: styled.div`
    margin: 1rem 0;
    .signUp-check {
      display: flex;
      gap: 0.5rem;
    }
    & p {
      font-size: 0.75rem;
      margin: 0.5rem 0 0 1rem;
    }
  `,
};

function SignUpPage() {
  const { mutate } = useSignUpMutation();

  return (
    <Styled.SignUpContainer>
      <Styled.SignUpTitle>간편가입</Styled.SignUpTitle>
      <Button
        style={{
          width: "100%",
          padding: "1rem",
          margin: "1rem 0 4rem",
          backgroundColor: "#FFEB02",
          color: "#000000",
          fontWeight: "bold",
        }}
        useHoverStyle={false}
      >
        카카오로 시작하기
      </Button>

      <Styled.SignUpTitle>이메일 간편가입</Styled.SignUpTitle>

      <Form
        onSubmit={(data) => {
          mutate({
            email: data.email,
            password: data.password,
            nickname: data.nickname,
          });
        }}
        inputInformations={FORM_INFO.SIGN_UP}
        defaultValues={FORM_DEFAULT.SIGN_UP}
      >
        <Button
          type="submit"
          style={{
            width: "100%",
            padding: "1rem",
            margin: "1rem 0",
          }}
        >
          전송
        </Button>
      </Form>
    </Styled.SignUpContainer>
  );
}

export default SignUpPage;
