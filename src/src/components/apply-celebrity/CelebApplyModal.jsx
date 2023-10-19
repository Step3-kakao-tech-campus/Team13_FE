import { useState } from "react";
import styled from "styled-components";

import BackdropModal from "../common/modal/BackdropModal.jsx";
import ThumbnailBox from "../create-fund/ThumbnailBox.jsx";
import Button from "../common/button/Button.jsx";
import SelectForm from "./SelectForm.jsx";

const Styled = {
  Title: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
  `,
  FormContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Label: styled.label`
    padding-bottom: 0.5rem;
    font-size: 1rem;
  `,
  Input: styled.input`
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    width: 100%;
    height: 3rem;
    font-size: 1rem;
  `,
};

function CelebApplyModal({ setOpen }) {
  const [thumbnailFile, setThumbnailFile] = useState(null);

  const genderOptions = [
    { label: "남자", value: "male" },
    { label: "여자", value: "female" },
  ];

  const categoryOptions = [
    { label: "가수", value: "singer" },
    { label: "배우", value: "actor" },
    { label: "코미디언", value: "comedian" },
    { label: "스포츠", value: "sports" },
    { label: "인플루언서", value: "influencer" },
  ];

  const handleGenderChange = (selectedValue) => {
    console.log(`선택된 성별: ${selectedValue}`);
  };

  const handleCategoryChange = (selectedValue) => {
    console.log(`선택된 분류: ${selectedValue}`);
  };

  return (
    <BackdropModal
      setOpen={setOpen}
      modalStyle={{
        width: "22.4rem",
        height: "43.5rem",
        padding: "2.5rem 3.4rem",
      }}
    >
      <Styled.Title>셀럽 신청</Styled.Title>
      <ThumbnailBox file={thumbnailFile} setFile={setThumbnailFile} />

      <Styled.FormContainer>
        <Styled.Label>이름</Styled.Label>
        <Styled.Input
          type="text"
          placeholder="이름을 입력해주세요"
        ></Styled.Input>
        <SelectForm
          options={genderOptions}
          label="성별"
          onChange={handleGenderChange}
        />
        <SelectForm
          options={categoryOptions}
          label="분류"
          onChange={handleCategoryChange}
        />
        <Styled.Label>소속그룹</Styled.Label>
        <Styled.Input type="text" placeholder="선택사항"></Styled.Input>
      </Styled.FormContainer>

      <Button
        style={{
          padding: "0.75rem",
          width: "100%",
          maringTop: "0.5rem",
        }}
      >
        신청하기
      </Button>
      <></>
    </BackdropModal>
  );
}

export default CelebApplyModal;
