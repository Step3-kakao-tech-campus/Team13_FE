import CelebRequestInfoCard from "@/components/celebrity/CelebRequestInfoCard.jsx";
import { GridTemplate } from "@/styles/CommonStyle";
import styled from "styled-components";

const Styled = {
  Title: styled.div`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 1.75rem;
  `,

  CelebRequest: styled.div`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 1.75rem;
  `,
};

function AdminPage() {
  return (
    <>
      <Styled.Title style={{ padding: "4rem 0" }}>관리자</Styled.Title>

      <Styled.CelebRequest>셀럽 등록 요청</Styled.CelebRequest>

      <GridTemplate>
        <CelebRequestInfoCard />
      </GridTemplate>
    </>
  );
}

export default AdminPage;
