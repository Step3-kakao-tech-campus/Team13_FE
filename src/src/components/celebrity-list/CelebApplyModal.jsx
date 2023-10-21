import { useState } from "react";
import toast from "react-hot-toast";

import styled from "styled-components";

import BackdropModal from "@/components/common/modal/BackdropModal.jsx";
import ThumbnailBox from "@/components/common/images/ThumbnailBox.jsx";
import Button from "@/components/common/button/Button.jsx";
import SelectInput from "@/components/celebrity-list/SelectInput.jsx";
import SELECTFORM_INFO from "@/constants/SELECTFORM_INFO.js";

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

    &::placeholder {
      color: ${({ theme }) => theme.color.inactive};
    }
  `,
};

function CelebApplyModal({ setOpen }) {
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [name, setName] = useState("");

  const handleGenderChange = (selectedValue) => {
    console.log(`선택된 성별: ${selectedValue}`);
  };

  const handleCategoryChange = (selectedValue) => {
    console.log(`선택된 분류: ${selectedValue}`);
  };

  const handleApplyCelebSubmit = () => {
    if (!thumbnailFile) return toast.error("셀럽 이미지를 추가해 주세요");
    if (!name || name === "") return toast.error("셀럽 이름을 입력해 주세요");

    toast.success("성공적으로 셀럽 신청이 완료되었습니다!");
  };

  return (
    <BackdropModal
      setOpen={setOpen}
      modalStyle={{
        padding: "2.8rem 3.3rem",
      }}
    >
      <Styled.Title>셀럽 신청</Styled.Title>
      <ThumbnailBox file={thumbnailFile} setFile={setThumbnailFile} />

      <Styled.FormContainer>
        <Styled.Label>이름</Styled.Label>
        <Styled.Input
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <SelectInput
          options={SELECTFORM_INFO.GENDER}
          label="성별"
          onChange={handleGenderChange}
        />
        <SelectInput
          options={SELECTFORM_INFO.CATEGORY}
          label="분류"
          onChange={handleCategoryChange}
        />
        <Styled.Label>소속그룹</Styled.Label>
        <Styled.Input type="text" placeholder="선택사항" />
      </Styled.FormContainer>

      <Button
        onClick={handleApplyCelebSubmit}
        style={{
          padding: "0.75rem",
          width: "100%",
          maringTop: "0.5rem",
        }}
      >
        신청하기
      </Button>
    </BackdropModal>
  );
}

export default CelebApplyModal;
