import { useSearchParams } from "react-router-dom";
import PageTitle from "@/components/common/PageTitle.jsx";
import { useState } from "react";
import EDIT_TYPE from "@/constants/EDIT_TYPE.js";
import { Title } from "@/styles/CommonStyle.js";

function FundTextEditPage() {
  const [searchParams, _] = useSearchParams();
  const type = searchParams.get("type");
  const fundId = searchParams.get("fundId");

  const [text, setText] = useState();

  const titleByType = {
    fundIntroduction: "펀딩 소개 수정",
    fundUpdate: "펀딩 업데이트 작성",
  };

  return (
    <>
      <PageTitle title={EDIT_TYPE.TITLE[type]} />
      <Title>펀딩 주최하기</Title>
      <Styled.InputContainer>
        <Styled.TitleInput
          placeholder="펀딩 제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Styled.InputContainer>
    </>
  );
}

export default FundTextEditPage;
