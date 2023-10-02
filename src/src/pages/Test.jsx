import PageTitle from "@/components/common/PageTitle.jsx";
import Grid from "@/components/common/template/Grid.jsx";
import styled from "styled-components";
import Button from "@/components/common/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";

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
      <Button style={{ margin: "1rem" }}>PRIMARY</Button>
      <Button isHoverStyle={false}>PRIMARY</Button>

      <Button type={BUTTON_TYPE.SECONDARY}>SECONDARY</Button>
      <Button isHoverStyle={false} type={BUTTON_TYPE.SECONDARY}>
        SECONDARY
      </Button>

      <Button type={BUTTON_TYPE.TERTIARY}>TERITARY</Button>
      <Button isHoverStyle={false} type={BUTTON_TYPE.TERTIARY}>
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
