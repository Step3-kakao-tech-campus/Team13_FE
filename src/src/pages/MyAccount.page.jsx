import styled from "styled-components";

import useUserSettingQuery from "@/hooks/api/useUserSettingQuery.js";
import useDeleteAccountMutation from "@/hooks/api/useDeleteAccountMutation.js";
import useDeleteUserInfoInLocalStorage from "@/hooks/useDeleteUserInfoInLocalStorage.js";

import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import { FormTemplate } from "@/styles/CommonStyle.js";

import Button from "@/components/common/button/Button.jsx";
import MyAccountLoader from "@/components/my-account/MyAccount.Loader.jsx";
import UserSettingForm from "@/components/my-account/UserSettingForm.jsx";

const Styled = {
  Title: styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
  `,
};

const buttonStyle = {
  width: "100%",
  padding: "1rem",
  margin: "1.25rem 0 2rem 0",
};

function MyAccountPage() {
  const deleteUserInfoInLocalStorage = useDeleteUserInfoInLocalStorage();
  const { mutate: deleteAccountMutate } = useDeleteAccountMutation();

  const { data: userSettingData, isLoading } = useUserSettingQuery();

  if (isLoading) return <MyAccountLoader />;

  return (
    <FormTemplate>
      <Styled.Title>회원정보 수정하기</Styled.Title>

      <UserSettingForm data={userSettingData} />

      <Styled.Title>로그아웃하기</Styled.Title>
      <Button
        styleType={BUTTON_TYPE.SECONDARY}
        onClick={deleteUserInfoInLocalStorage}
        style={buttonStyle}
      >
        로그아웃
      </Button>

      <Styled.Title>회원 탈퇴하기</Styled.Title>
      <Button
        styleType={BUTTON_TYPE.PRIMARY}
        onClick={deleteAccountMutate}
        style={buttonStyle}
      >
        회원 탈퇴
      </Button>
    </FormTemplate>
  );
}

export default MyAccountPage;
