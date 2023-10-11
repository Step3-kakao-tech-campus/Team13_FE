import styled from "styled-components";

const Styled = {
  Container: styled.div`
    padding-left: 2rem;
    width: 22.5rem;

    @media screen and (max-width: 767px) {
      padding: 2rem 0 0;
      width: 100%;
    }
  `,
};

function InfoContainer() {
  return <Styled.Container>ㅇ</Styled.Container>;
}

export default InfoContainer;
