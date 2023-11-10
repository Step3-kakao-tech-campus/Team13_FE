import styled from "styled-components";

const Styled = {
  Container: styled.div``,
  Title: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
  `,
};

function UpdateWrapper() {
  return (
    <>
      <Styled.Title>업데이트</Styled.Title>
    </>
  );
}

export default UpdateWrapper;
