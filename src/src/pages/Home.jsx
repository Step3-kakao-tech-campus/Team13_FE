import PageTitle from "@/components/common/PageTitle.jsx";
import Grid from "@/components/common/template/Grid.jsx";
import styled from "styled-components";

const Styled = {
  GridExample: styled.article`
    background-color: palevioletred;
    height: 10rem;
  `,
};
function Home() {
  return (
    <>
      <PageTitle />
      <div>home</div>

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

export default Home;
