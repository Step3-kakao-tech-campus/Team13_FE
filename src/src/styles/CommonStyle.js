import styled from "styled-components";
import TextareaAutoSize from "react-textarea-autosize";

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

export const WhiteInputContainer = styled.article`
  margin: 2rem 0;
  padding: 2rem;
  width: 100%;

  background-color: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => theme.border.main};
  border-radius: 0.25rem;
`;

export const FundTitleInput = styled(TextareaAutoSize)`
  padding: 0 0.5rem 0.5rem;
  width: 100%;
  resize: none;

  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.body};

  overflow-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;

  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color.inactive};
  outline: none;

  transition: border-bottom-color ease-in-out 0.3s;

  &::placeholder {
    color: ${({ theme }) => theme.color.addition};
  }

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.mainRed};
  }
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
