import styled from "styled-components";

const Styled = {
  Container: styled.div`
    margin: 1rem 0;
  `,
  Title: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
  `,
};

function Update() {
  return (
    <Styled.Container>
      <Styled.Title>업데이트 제목</Styled.Title>
    </Styled.Container>
  );
}

export default Update;
