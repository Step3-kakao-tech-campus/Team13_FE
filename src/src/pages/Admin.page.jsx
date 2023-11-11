import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import routes from "@/constants/routes.js";
import { GridTemplate } from "@/styles/CommonStyle";
import CelebRequestInfoCard from "@/components/celebrity/celebRequestInfoCard";
import Layout from "@/components/common/template/Layout";
import MainLayout from "@/components/common/template/MainLayout";

const Styled = {
  Title: styled(Title)`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 1.75rem;
  `,
};

function AdminPage() {
  const isAdmin = localStorage.getItem("isAdmin");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAdmin);
    if (!isAdmin) {
      navigate(routes.signIn);
    }
  }, [isAdmin]);

  return (
    <>
      <GridTemplate>
        <CelebRequestInfoCard></CelebRequestInfoCard>
        <CelebRequestInfoCard></CelebRequestInfoCard>
        <CelebRequestInfoCard></CelebRequestInfoCard>
      </GridTemplate>
    </>
  );
}

export default AdminPage;
