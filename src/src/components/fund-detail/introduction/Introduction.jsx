import styled from "styled-components";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import CoAdmins from "@/components/fund-detail/introduction/CoAdmins.jsx";
import CoAdminsLoader from "@/components/fund-detail/introduction/CoAdmins.loader.jsx";
import IntroTextView from "@/components/fund-detail/introduction/IntroTextView.jsx";

const Styled = {
  Container: styled.div``,
  TitleBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
  `,
  CoAdminBox: styled.div`
    padding: 1rem 0 2rem 0;
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-gap: 1rem;

    @media screen and (max-width: calc(600px + 2rem + 4rem)) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: calc(400px + 1rem + 4rem)) {
      grid-template-columns: repeat(1, 100%);
    }
  `,
};

function Introduction() {
  return (
    <Styled.Container>
      <Styled.TitleBox>
        <Styled.Title>공동관리자</Styled.Title>
      </Styled.TitleBox>

      <ErrorBoundary
        fallback={
          <div style={{ padding: "1rem 0 2rem 0" }}>
            공동관리자 정보 불러오기에 실패했습니다
          </div>
        }
      >
        <Styled.CoAdminBox>
          <Suspense fallback={<CoAdminsLoader />}>
            <CoAdmins />
          </Suspense>
        </Styled.CoAdminBox>
      </ErrorBoundary>

      <Styled.Title>프로젝트 소개</Styled.Title>
      <ErrorBoundary
        fallback={
          <div style={{ padding: "1rem 0" }}>
            프로젝트 소개글 조회에 실패했습니다
          </div>
        }
      >
        <IntroTextView />
      </ErrorBoundary>
    </Styled.Container>
  );
}

export default Introduction;
