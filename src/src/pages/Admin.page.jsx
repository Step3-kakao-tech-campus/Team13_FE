import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import routes from "@/constants/routes.js";
import { GridTemplate, Title } from "@/styles/CommonStyle";
import CelebRequestInfoCard from "@/components/celebrity/celebRequestInfoCard.jsx";
import styled from "styled-components";
import CelebRequestModal from "@/components/celebrity/CelebRequestModal";
import { useState } from "react";

const Styled = {
  Title: styled(Title)`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 1.75rem;
  `,

  CelebRequest: styled(Title)`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 1.75rem;
  `,
};

function AdminPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin");
  const navigate = useNavigate();

  const handleModalOpen = (isOpen) => {
    setModalOpen(isOpen);
  };

  useEffect(() => {
    console.log(isAdmin);
    if (!isAdmin) {
      navigate(routes.signIn);
    }
  }, [isAdmin]);

  return (
    <>
      {modalOpen && <CelebRequestModal setOpen={handleModalOpen} />}

      <Styled.Title style={{ padding: "4rem 0" }}>관리자</Styled.Title>

      <Styled.CelebRequest>셀럽 등록 요청</Styled.CelebRequest>

      <GridTemplate>
        <CelebRequestInfoCard
          openModal={handleModalOpen}
        ></CelebRequestInfoCard>
        <CelebRequestInfoCard
          openModal={handleModalOpen}
        ></CelebRequestInfoCard>
        <CelebRequestInfoCard
          openModal={handleModalOpen}
        ></CelebRequestInfoCard>
      </GridTemplate>
    </>
  );
}

export default AdminPage;
