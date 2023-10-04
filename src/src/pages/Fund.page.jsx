import styled from "styled-components";

import { GridTemplate, Title } from "@/styles/CommonStyle.js";
import MainLayout from "@/components/common/template/MainLayout.jsx";
import SearchBar from "@/components/common/SearchBar.jsx";
import routes from "@/constants/routes.js";

const Styled = {
  Title: styled(Title)`
    width: fit-content;
  `,
};

function FundPage() {
  return (
    <MainLayout>
      <Styled.Title>펀딩</Styled.Title>
      <SearchBar uri={routes.fund} />

      <GridTemplate>
        <p>d</p>
        <p>d</p>
        <p>d</p>
      </GridTemplate>
    </MainLayout>
  );
}

export default FundPage;
