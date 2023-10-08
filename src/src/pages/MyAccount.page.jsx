import styled from "styled-components";
import { useState } from "react";

import ChangeProfileBox from "@/components/my-account/ChangeProfileBox.jsx";
import Form from "@/components/common/form/Form.jsx";
import Button from "@/components/common/button/Button.jsx";
import FORM_DEFAULT from "@/constants/FORM_DEFAULT.js";
import FORM_INFO from "@/constants/FORM_INFO.js";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import { FormTemplate } from "@/styles/CommonStyle.js";

const Styled = {
  Title: styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
  `,
};

function MyAccountPage() {
  const [profileImageFile, setProfileImageFile] = useState(null);

  const loadedProfileUrl =
    "https://velog.velcdn.com/images/j8won/profile/55917697-2140-40be-ad07-d2d02137f38e/image.jpeg";

  const loadedDefaultValues = async () => {
    try {
      // api 통신 후 기존 회원정보 가지고 오기
      // return FORM_DEFAULT.MY_ACCOUNT;
      return {
        nickname: "경주원",
        phoneNumber: "010-1234-1234",
        currentPassword: FORM_DEFAULT.MY_ACCOUNT.currentPassword,
        changedPassword: FORM_DEFAULT.MY_ACCOUNT.changedPassword,
      };
    } catch (e) {
      // 추후 react-hot-toast 에러 메시지 추가
      alert(e.message);
      return FORM_DEFAULT.MY_ACCOUNT;
    }
  };

  return (
    <FormTemplate>
      <Styled.Title>회원정보 수정하기</Styled.Title>
      <ChangeProfileBox
        loadedUrl={loadedProfileUrl}
        imageFile={profileImageFile}
        setImageFile={setProfileImageFile}
      />
      <Form
        onSubmit={(data) => console.log(data)}
        onError={(err) => console.log(err)}
        inputInformations={FORM_INFO.MY_ACCOUNT}
        defaultValues={loadedDefaultValues}
      >
        <Button
          styleType={BUTTON_TYPE.PRIMARY}
          type="submit"
          style={{
            width: "100%",
            padding: "1rem",
            margin: "0.75rem 0 2rem 0",
          }}
        >
          저장하기
        </Button>
      </Form>
      <Styled.Title>로그아웃하기</Styled.Title>
      <Button
        styleType={BUTTON_TYPE.SECONDARY}
        onClick={() => {
          // accessToken, refreshToken 삭제
        }}
        style={{
          width: "100%",
          padding: "1rem",
          margin: "1.25rem 0 2rem 0",
        }}
      >
        로그아웃
      </Button>
      <Styled.Title>회원 탈퇴하기</Styled.Title>
      <Button
        styleType={BUTTON_TYPE.PRIMARY}
        onClick={() => {
          // 회원 탈퇴 api 통신
        }}
        style={{ width: "100%", padding: "1rem", margin: "1.25rem 0 0" }}
      >
        회원 탈퇴
      </Button>
    </FormTemplate>
  );
}

export default MyAccountPage;
