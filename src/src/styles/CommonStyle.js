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
  padding: 0 calc((100% - 22rem) / 2);
`;

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
`;

export const Shimmer = styled.div`
  width: 70%;
  height: 100%;
  background-color: #e0e0e0;
  box-shadow: 0 0 50px 50px #e0e0e0;
  animation: loading 2s infinite;
  @keyframes loading {
    0% {
      transform: translateX(-50%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translate(200%);
    }
  }
`;
