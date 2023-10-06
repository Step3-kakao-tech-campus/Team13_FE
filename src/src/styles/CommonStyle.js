import styled from "styled-components";

export const GridTemplate = styled.div`
  display: grid;
  justify-content: center;
  align-items: flex-start;

  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 3rem;

  @media screen and (max-width: calc(320px + 4rem)) {
    grid-template-columns: repeat(1, 100%);
  }
`;

export const FormTemplate = styled.div`
  margin: 4rem 0;
  padding: 0 calc((100vw - 22rem) / 2 - (100vw - 70rem) / 2 + 2rem);
  @media (max-width: 70rem) {
    padding: 0 calc((100vw - 22rem) / 2 - 2rem);
  }
`;

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
`;
