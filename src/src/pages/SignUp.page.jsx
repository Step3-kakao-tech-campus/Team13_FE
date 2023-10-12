import { useNavigate } from "react-router-dom";
import routes from "@/constants/routes.js";
import styled from "styled-components";

import Form from "@/components/common/form/Form.jsx";
import Button from "@/components/common/button/Button.jsx";

import FORM_INFO from "@/constants/FORM_INFO.js";
import CheckBox from "@/components/common/button/CheckBox.jsx";
import FORM_DEFAULT from "@/constants/FORM_DEFAULT.js";
import { Title } from "@/styles/CommonStyle.js";

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
    }
    & p {
      font-size: 0.75rem;
      margin: 0.5rem 0 0 1rem;
    }
  `,
};

function SignUpPage() {
  const navigate = useNavigate();

  const onSignUpSubmit = () => {
    navigate(routes.signIn);
  };

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
        onSubmit={(data) => console.log(data)}
        onError={(err) => console.log(err)}
        inputInformations={FORM_INFO.SIGN_UP}
        defaultValues={FORM_DEFAULT.SIGN_UP}
      >
        <Styled.SignUpAgree>
          <div className="signUp-check">
            <CheckBox id={"signUp-agree"} />
          </div>
          <p>
            자세한약관은 준비중입니다.자세한약관은 준비중입니다.자세한약관은
            준비중입니다.자세한약관은 준비중입니다.자세한약관은 준비중입니다.
          </p>
        </Styled.SignUpAgree>

        <Button
          type="submit"
          onClick={onSignUpSubmit}
          style={{
            width: "100%",
            padding: "1rem",
            margin: "0.375rem 0",
          }}
        >
          전송
        </Button>
      </Form>
    </Styled.SignUpContainer>
  );
}

export default SignUpPage;
