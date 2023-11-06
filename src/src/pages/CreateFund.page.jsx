import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  Title,
  FundTitleInput,
  WhiteInputContainer,
} from "@/styles/CommonStyle";
import ImagePreviewButton from "@/components/common/button/ImagePreviewButton.jsx";
import SettingForm from "@/components/create-fund/SettingForm.jsx";
import formatDateToYYYYMMDD from "@/utils/formateDateToYYYYMMDD.js";
import TextEditor from "@/components/common/TextEditor.jsx";
import Button from "@/components/common/button/Button.jsx";
import routes from "@/constants/routes.js";
import useSetImageFileToUrl from "@/hooks/useSetImageFileToUrl.js";

const Styled = {
  Container: styled.section`
    margin: 3rem 0;
    padding: 0 calc((100% - 41.5rem) / 2);

    #thumbnail-note {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.alertBlue};
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
  const {
    file: thumbnailFile,
    imageUrl: thumbnailImageUrl,
    handleFileChange: handleThumbnailChange,
    handleFileDelete: handleThumbnailDelete,
  } = useSetImageFileToUrl();

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
      <WhiteInputContainer>
        <FundTitleInput
          placeholder="펀딩 제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </WhiteInputContainer>

      <Styled.Subtitle>썸네일</Styled.Subtitle>
      <div id="thumbnail-note" style={{ fontSize: "0.75rem" }}>
        16:10 비율이 가장 적절합니다
      </div>
      <ImagePreviewButton
        imageUrl={thumbnailImageUrl}
        handleFileDelete={handleThumbnailDelete}
        handleFileChange={handleThumbnailChange}
      />

      <Styled.Subtitle>펀딩 설정</Styled.Subtitle>
      <WhiteInputContainer>
        <SettingForm input={settingInput} setInput={setSettingInput} />
      </WhiteInputContainer>

      <Styled.Subtitle>펀딩 소개</Styled.Subtitle>
      <TextEditor
        text={introductionText}
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
