import styled from "styled-components";
import { useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import useUserSettingQuery from "@/hooks/api/useUserSettingQuery.js";

import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import routes from "@/constants/routes.js";
import { FormTemplate } from "@/styles/CommonStyle.js";
import accessTokenAtom from "@/storage/accessToken.atom.js";
import refreshTokenAtom from "@/storage/refreshToken.atom.js";

import Button from "@/components/common/button/Button.jsx";
import MyAccountLoader from "@/components/my-account/MyAccount.Loader.jsx";
import UserSettingForm from "@/components/my-account/UserSettingForm.jsx";

const Styled = {
  Title: styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
  `,
};

function MyAccountPage() {
  const navigate = useNavigate();

  const setAccessToken = useSetAtom(accessTokenAtom);
  const setRefreshToken = useSetAtom(refreshTokenAtom);

  const { data, isLoading } = useUserSettingQuery();

  if (isLoading) return <MyAccountLoader />;

  return (
    <FormTemplate>
      <Styled.Title>회원정보 수정하기</Styled.Title>

      <UserSettingForm data={data} />

      <Styled.Title>로그아웃하기</Styled.Title>
      <Button
        styleType={BUTTON_TYPE.SECONDARY}
        onClick={() => {
          setAccessToken("");
          setRefreshToken("");
          navigate(routes.home);
        }}
        style={{ width: "100%", padding: "1rem", margin: "1.25rem 0 2rem 0" }}
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
