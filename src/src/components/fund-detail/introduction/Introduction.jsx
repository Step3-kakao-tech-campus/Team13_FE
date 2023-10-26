import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Suspense } from "react";
import { PropTypes } from "prop-types";

import QuillStrToHtml from "@/components/common/QuillStrToHtml.jsx";
import Button from "@/components/common/button/Button.jsx";
import routes from "@/constants/routes.js";
import CoAdmins from "@/components/fund-detail/introduction/CoAdmins.jsx";
import CoAdminsLoader from "@/components/fund-detail/introduction/CoAdmins.loader.jsx";
import useFundIntroQuery from "@/hooks/api/fund/useFundIntroQuery.js";
import EDIT_TYPE from "@/constants/EDIT_TYPE.js";

const Styled = {
  Container: styled.div``,
  TitleBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
  `,
  CoAdminBox: styled.div`
    padding: 1rem 0 2rem 0;
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-gap: 1rem;

    @media screen and (max-width: calc(600px + 2rem + 4rem)) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: calc(400px + 1rem + 4rem)) {
      grid-template-columns: repeat(1, 100%);
    }
  `,
};

function Introduction({ isOrganizer }) {
  const navigate = useNavigate();
  const { fundId } = useParams();
  const { data } = useFundIntroQuery({ fundId });

  return (
    <Styled.Container>
      <Styled.TitleBox>
        <Styled.Title>공동관리자</Styled.Title>
        {isOrganizer && (
          <Button
            onClick={() => {
              navigate(
                `${routes.edit}?type=${EDIT_TYPE.FUND_INTRODUCTION}&fundId=${fundId}`,
              );
            }}
          >
            수정하기
          </Button>
        )}
      </Styled.TitleBox>

      <Styled.CoAdminBox>
        <Suspense fallback={<CoAdminsLoader />}>
          <CoAdmins />
        </Suspense>
      </Styled.CoAdminBox>

      <Styled.Title>프로젝트 소개</Styled.Title>
      <QuillStrToHtml
        htmlStr={data?.introduction}
        style={{ paddingTop: "1rem" }}
      />
    </Styled.Container>
  );
}

Introduction.propTypes = {
  isOrganizer: PropTypes.bool.isRequired,
};

export default Introduction;
