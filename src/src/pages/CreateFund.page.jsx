import styled from "styled-components";
import { useState } from "react";
import TextareaAutoSize from "react-textarea-autosize";

import { Title } from "@/styles/CommonStyle";
import ThumbnailBox from "@/components/create-fund/ThumbnailBox.jsx";

const Styled = {
  Container: styled.section`
    margin: 3rem 0;
    padding: 0 calc((100% - 41.5rem) / 2);
  `,
  InputContainer: styled.article`
    margin: 2rem 0;

    padding: 2rem;
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.main};
    border-radius: 0.25rem;
  `,
  TitleInput: styled(TextareaAutoSize)`
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
  `,
  Subtitle: styled.div`
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.body};
  `,
};

function CreateFundPage() {
  const [thumbnailFile, setThumbnailFile] = useState(null);
  return (
    <Styled.Container>
      <Title>펀딩 주최하기</Title>
      <Styled.InputContainer>
        <Styled.TitleInput placeholder="펀딩 제목을 입력해 주세요" />
      </Styled.InputContainer>

      <Styled.Subtitle>썸네일</Styled.Subtitle>
      <ThumbnailBox file={thumbnailFile} setFile={setThumbnailFile} />
    </Styled.Container>
  );
}

export default CreateFundPage;
