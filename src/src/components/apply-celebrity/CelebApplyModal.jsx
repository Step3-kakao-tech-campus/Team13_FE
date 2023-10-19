import { useState } from "react";
import BackdropModal from "../common/modal/BackdropModal.jsx";
import ThumbnailBox from "../create-fund/ThumbnailBox.jsx";
import Button from "../common/button/Button.jsx";
import SelectForm from "./SelectForm.jsx";

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
        padding: "2rem 3.4rem",
      }}
    >
      <h1>셀럽 신청</h1>
      <ThumbnailBox file={thumbnailFile} setFile={setThumbnailFile} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <labe>이름</labe>
        <input type="text"></input>

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

        <labe>소속그룹</labe>
        <input type="text" placeholder="선택사항"></input>
      </div>

      <Button
        style={{
          padding: "0.75rem",
          width: "100%",
        }}
      >
        신청하기
      </Button>
      <></>
    </BackdropModal>
  );
}

export default CelebApplyModal;
