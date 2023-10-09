import styled from "styled-components";
import { useState } from "react";
import TextareaAutoSize from "react-textarea-autosize";

import { Title } from "@/styles/CommonStyle";
import ThumbnailBox from "@/components/create-fund/ThumbnailBox.jsx";
import IntroduceForm from "@/components/create-fund/IntroduceForm.jsx";
import formatDateToYYYYMMDD from "@/utils/formateDateToYYYYMMDD.js";
import TextEditor from "@/components/common/TextEditor.jsx";
import Button from "@/components/common/button/Button.jsx";

const Styled = {
  Container: styled.section`
    margin: 3rem 0;
    padding: 0 calc((100% - 41.5rem) / 2);

    #thumbnail-note {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.alertBlue};
    }

    margin-bottom: 100rem;
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

  const date = new Date();
  date.setDate(date.getDate() + 30);

  const [settingInput, setSettingInput] = useState({
    targetMoney: 0,
    dueDate: formatDateToYYYYMMDD(date),
    celebId: "",
    celebName: "",
  });

  const [introductionText, setIntroductionText] = useState("");

  const handleCreateFundSubmit = () => {
    console.log(thumbnailFile);
    console.log(settingInput);
    console.log(introductionText);
  };

  return (
    <Styled.Container>
      <Title>펀딩 주최하기</Title>
      <Styled.InputContainer>
        <Styled.TitleInput placeholder="펀딩 제목을 입력하세요" />
      </Styled.InputContainer>

      <Styled.Subtitle>썸네일</Styled.Subtitle>
      <div id="thumbnail-note" style={{ fontSize: "0.75rem" }}>
        16:10 비율이 가장 적절합니다
      </div>
      <ThumbnailBox file={thumbnailFile} setFile={setThumbnailFile} />

      <Styled.Subtitle>펀딩 설정</Styled.Subtitle>
      <Styled.InputContainer>
        <IntroduceForm input={settingInput} setInput={setSettingInput} />
      </Styled.InputContainer>

      <Styled.Subtitle>펀딩 소개</Styled.Subtitle>
      <TextEditor
        setText={setIntroductionText}
        style={{ height: "calc(100vh - 15rem)" }}
      />

      <Button
        onClick={handleCreateFundSubmit}
        style={{
          padding: "0.75rem",
          marginTop: "4rem",
          width: "100%",
        }}
      >
        펀딩 주최하기
      </Button>
    </Styled.Container>
  );
}

export default CreateFundPage;
