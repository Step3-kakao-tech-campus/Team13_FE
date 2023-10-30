import styled from "styled-components";

const Styled = {
  Title: styled(Title)`
    width: fit-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  TitleBar: styled.div`
    padding-bottom: 1.75rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

function MainPage() {
  return <div></div>;
}

export default MainPage;
