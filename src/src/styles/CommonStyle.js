import styled from "styled-components";

export const GridTemplate = styled.section`
  display: grid;
  justify-content: center;
  align-items: flex-start;

  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 3rem;

  @media screen and (max-width: calc(320px + 4rem)) {
    grid-template-columns: repeat(1, 100%);
  }
`;
