import styled from "styled-components";
import PageTitle from "@/components/common/PageTitle.jsx";
import Grid from "@/components/common/template/Grid.jsx";
import Button from "@/components/common/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import CheckBox from "@/components/common/CheckBox.jsx";
import Tabs from "@/components/common/Tabs.jsx";
import SearchBar from "@/components/common/SearchBar.jsx";
import routes from "@/constants/routes.js";

const Styled = {
  GridExample: styled.article`
    background-color: palevioletred;
    height: 10rem;
  `,
};
function Test() {
  const tabInfoArray = [
    {
      title: "팔로잉",
      func: () => {
        console.log("팔로잉");
      },
    },
    {
      title: "찜한 목록",
      func: () => {
        console.log("찜한 목록");
      },
    },
    {
      title: "펀딩 내역",
      func: () => {
        console.log("펀딩 내역");
      },
    },
  ];

  return (
    <>
      <PageTitle />

      <SearchBar placeholder={"펀딩 검색바"} uri={routes.fund} />
      <SearchBar placeholder={"셀럽 검색바"} uri={routes.celebrity} />

      <CheckBox id={1} />
      <CheckBox id={"hi"} />

      <Tabs tabInfoArray={tabInfoArray} />
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
