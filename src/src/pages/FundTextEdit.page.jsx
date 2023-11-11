import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import PageTitle from "@/components/common/PageTitle.jsx";
import EDIT_TYPE from "@/constants/EDIT_TYPE.js";
import {
  Title,
  FundTitleInput,
  WhiteInputContainer,
} from "@/styles/CommonStyle.js";
import styled from "styled-components";
import TextEditor from "@/components/common/TextEditor.jsx";
import Button from "@/components/common/button/Button.jsx";
import routes from "@/constants/routes.js";
import useFundIntroQuery from "@/hooks/api/fund/useFundIntroQuery.js";
import usePostFundUpdateMutation from "@/hooks/api/fund/usePostFundUpdateMutation.js";

const Styled = {
  Container: styled.section`
    margin: 3rem 0;
    padding: 0 calc((100% - 60rem) / 2);
  `,
};

function FundTextEditPage() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const fundId = searchParams.get("fundId");

  const [updateTitle, setUpdateTitle] = useState("");
  const [editorText, setEditorText] = useState("");

  const navigate = useNavigate();

  const { data: fundIntroData } = useFundIntroQuery({ fundId });
  const { mutate: updateMutate } = usePostFundUpdateMutation({ fundId });

  useEffect(() => {
    if (!fundId) {
      navigate(routes.home);
    }

    if (type === EDIT_TYPE.FUND_INTRODUCTION) {
      // TODO: 기존 소개글 api 조회 후 setText
      setEditorText(fundIntroData?.introduction);
    }
  }, [fundId, type]);

  const handleSubmit = () => {
    switch (type) {
      case EDIT_TYPE.FUND_INTRODUCTION:
        return handleSubmitFundIntroduction();

      case EDIT_TYPE.FUND_UPDATE:
        return handleSubmitFundUpdate();

      default:
        return;
    }
  };

  const handleSubmitFundIntroduction = () => {
    console.log(editorText);
    //TODO: api 통신
  };

  const handleSubmitFundUpdate = () => {
    console.log(updateTitle);
    console.log(editorText);
    updateMutate({ title: updateTitle, content: editorText });
    //TODO: api 통신
  };

  return (
    <>
      <PageTitle title={EDIT_TYPE.PAGE_TITLE[type]} />

      <Styled.Container>
        <Title>{EDIT_TYPE.TITLE[type]}</Title>

        {type === EDIT_TYPE.FUND_UPDATE && (
          <WhiteInputContainer>
            <FundTitleInput
              placeholder="업데이트 제목을 입력하세요"
              value={updateTitle}
              onChange={(e) => setUpdateTitle(e.target.value)}
            />
          </WhiteInputContainer>
        )}

        <TextEditor
          text={editorText}
          setText={setEditorText}
          style={{ marginTop: "2rem", height: "calc(100vh - 20rem)" }}
        />

        <Button
          onClick={handleSubmit}
          style={{
            padding: "0.75rem",
            marginBottom: "2rem",
            float: "right",
          }}
        >
          {EDIT_TYPE.BUTTON[type]}
        </Button>
      </Styled.Container>
    </>
  );
}

export default FundTextEditPage;
