import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { PropTypes } from "prop-types";

import BackdropModal from "@/components/common/modal/BackdropModal.jsx";
import ImagePreviewButton from "@/components/common/button/ImagePreviewButton.jsx";
import Button from "@/components/common/button/Button.jsx";
import SelectInput from "@/components/celebrity-list/SelectInput.jsx";

import SELECT_INFO from "@/constants/SELECT_INFO.js";
import useSetImageFileToUrl from "@/hooks/useSetImageFileToUrl.js";
import usePostCelebApplyMutation from "@/hooks/api/celebrity/usePostCelebApplyMutation.js";

/**
 * 셀럽 신청 모달 컴포넌트
 * @param {function(boolean)} setOpen 모달 상태 업데이트 함수
 */

const Styled = {
  Container: styled.div`
    @media screen and (min-width: 769px) {
      width: 20rem;
    }
  `,
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
    border: ${({ theme }) => theme.border.input};

    &::placeholder {
      color: ${({ theme }) => theme.color.inactive};
    }
  `,
};

function CelebApplyModal({ setOpen }) {
  const {
    file: profileFile,
    imageUrl: profileImageUrl,
    handleFileDelete,
    handleFileChange,
  } = useSetImageFileToUrl();

  const [textCelebInfo, setTextCelebInfo] = useState({
    name: "",
    gender: "",
    category: "",
    group: "",
  });

  const handleOnChange = (fieldName, value) => {
    setTextCelebInfo((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const { mutate: postApplyMutate } = usePostCelebApplyMutation(() =>
    setOpen(false),
  );

  const handleApplyCelebSubmit = () => {
    if (!profileFile) return toast.error("셀럽 이미지를 추가해 주세요");
    if (!textCelebInfo.name || textCelebInfo.name === "")
      return toast.error("셀럽 이름을 입력해 주세요");
    if (!textCelebInfo.gender) return toast.error("성별을 선택해 주세요");
    if (!textCelebInfo.category) return toast.error("분류를 선택해 주세요");

    postApplyMutate({
      celebName: textCelebInfo.name,
      celebGender: textCelebInfo.gender,
      celebCategory: textCelebInfo.category,
      celebGroup: textCelebInfo.group,
      profileImage: profileFile.name,
    });
  };

  return (
    <BackdropModal setOpen={setOpen} modalStyle={{ padding: "3rem" }}>
      <Styled.Container>
        <Styled.Title>셀럽 신청</Styled.Title>

        <ImagePreviewButton
          imageUrl={profileImageUrl}
          handleFileChange={handleFileChange}
          handleFileDelete={handleFileDelete}
          containerStyle={{ width: "60%", margin: "1rem auto" }}
          imageAspectRatio="1/1"
        />

        <Styled.FormContainer>
          <Styled.Label>이름</Styled.Label>
          <Styled.Input
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(e) => handleOnChange("name", e.target.value)}
          />
          <SelectInput
            options={SELECT_INFO.GENDER}
            label="성별"
            onChange={(selectedValue) =>
              handleOnChange("gender", selectedValue)
            }
            selectedValue={textCelebInfo.gender}
          />
          <SelectInput
            options={SELECT_INFO.CATEGORY}
            label="분류"
            onChange={(selectedValue) =>
              handleOnChange("category", selectedValue)
            }
            selectedValue={textCelebInfo.category}
          />
          <Styled.Label>소속그룹</Styled.Label>
          <Styled.Input
            type="text"
            placeholder="선택사항"
            onChange={(e) => handleOnChange("group", e.target.value)}
          />
        </Styled.FormContainer>

        <Button
          onClick={handleApplyCelebSubmit}
          style={{
            padding: "0.75rem",
            width: "100%",
            marginTop: "0.5rem",
          }}
        >
          신청하기
        </Button>
      </Styled.Container>
    </BackdropModal>
  );
}

CelebApplyModal.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default CelebApplyModal;
