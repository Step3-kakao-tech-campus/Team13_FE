import PageTitle from "@/components/common/PageTitle.jsx";
import Grid from "@/components/common/template/Grid.jsx";
import styled from "styled-components";
import Button from "@/components/common/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import SearchBar from "@/components/common/SearchBar.jsx";
import routes from "@/constants/routes.js";
import Carousel from "@/components/common/Carousel.jsx";

const Styled = {
  GridExample: styled.article`
    background-color: palevioletred;
    height: 10rem;
  `,
};
function Test() {
  return (
    <>
      <PageTitle />
      <Carousel />

      <SearchBar placeholder={"펀딩 검색바"} uri={routes.fund} />
      <SearchBar placeholder={"셀럽 검색바"} uri={routes.celebrity} />

      <Button style={{ margin: "1rem" }}>PRIMARY</Button>
      <Button isHoverStyle={false}>PRIMARY</Button>

      <Button styleType={BUTTON_TYPE.SECONDARY}>SECONDARY</Button>
      <Button isHoverStyle={false} styleType={BUTTON_TYPE.SECONDARY}>
        SECONDARY
      </Button>

      <Button styleType={BUTTON_TYPE.TERTIARY}>TERITARY</Button>
      <Button isHoverStyle={false} styleType={BUTTON_TYPE.TERTIARY}>
        TERITARY
      </Button>

      <Grid>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
        <Styled.GridExample>d</Styled.GridExample>
      </Grid>
    </>
  );
}

export default Test;
