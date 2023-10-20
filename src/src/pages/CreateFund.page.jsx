import styled from "styled-components";
import { useState } from "react";
import TextareaAutoSize from "react-textarea-autosize";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { Title } from "@/styles/CommonStyle";
import ThumbnailBox from "@/components/common/images/ThumbnailBox.jsx";
import SettingForm from "@/components/create-fund/SettingForm.jsx";
import formatDateToYYYYMMDD from "@/utils/formateDateToYYYYMMDD.js";
import TextEditor from "@/components/common/TextEditor.jsx";
import Button from "@/components/common/button/Button.jsx";
import routes from "@/constants/routes.js";

const Styled = {
  Container: styled.section`
    margin: 3rem 0;
    padding: 0 calc((100% - 41.5rem) / 2);

    #thumbnail-note {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.alertBlue};
    }
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
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);

  const date = new Date();
  date.setDate(date.getDate() + 30);

  const [settingInput, setSettingInput] = useState({
    targetMoney: "0",
    dueDate: formatDateToYYYYMMDD(date),
    celebId: "",
    celebName: "",
  });

  const [introductionText, setIntroductionText] = useState("");

  const handleCreateFundSubmit = () => {
    if (!title || title === "") return toast.error("펀딩 제목을 입력해 주세요");
    if (!thumbnailFile) return toast.error("썸네일 이미지를 추가해 주세요");
    if (!settingInput.targetMoney || !settingInput.targetMoney === "0")
      return toast.error("목표 금액을 설정해 주세요");
    if (!settingInput.dueDate) return toast.error("마감 날짜를 설정해 주세요");
    if (!settingInput.celebId || settingInput.celebId === "")
      return toast.error("셀럽을 선택해 주세요");
    if (!introductionText || introductionText === "")
      return toast.error("소개글을 작성해 주세요");

    console.log(thumbnailFile);
    console.log(settingInput);
    console.log(introductionText);
    // console.log 대신 api 통신

    toast.success("성공적으로 펀딩을 주최했습니다!");
    navigate(routes.fund);
  };

  return (
    <Styled.Container>
      <Title>펀딩 주최하기</Title>
      <Styled.InputContainer>
        <Styled.TitleInput
          placeholder="펀딩 제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Styled.InputContainer>

      <Styled.Subtitle>썸네일</Styled.Subtitle>
      <div id="thumbnail-note" style={{ fontSize: "0.75rem" }}>
        16:10 비율이 가장 적절합니다
      </div>
      <ThumbnailBox file={thumbnailFile} setFile={setThumbnailFile} />

      <Styled.Subtitle>펀딩 설정</Styled.Subtitle>
      <Styled.InputContainer>
        <SettingForm input={settingInput} setInput={setSettingInput} />
      </Styled.InputContainer>

      <Styled.Subtitle>펀딩 소개</Styled.Subtitle>
      <TextEditor
        setText={setIntroductionText}
        style={{ height: "calc(100vh - 20rem)" }}
      />

      <Button
        onClick={handleCreateFundSubmit}
        style={{
          padding: "0.75rem",
          width: "100%",
        }}
      >
        펀딩 주최하기
      </Button>
    </Styled.Container>
  );
}

export default CreateFundPage;
