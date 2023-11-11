import styled from "styled-components";
import Update from "@/components/fund-detail/update/Update.jsx";
import useInfiniteUpdate from "@/hooks/api/fund/useInfiniteUpdate.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@/components/common/button/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import routes from "@/constants/routes.js";
import EDIT_TYPE from "@/constants/EDIT_TYPE.js";

const Styled = {
  Container: styled.div`
    float: right;
    padding-bottom: 1rem;
  `,
};

function UpdateWrapper({ isOrganizer }) {
  const { fundId } = useParams();
  const navigate = useNavigate();
  const { data } = useInfiniteUpdate({ fundId });
  return (
    <>
      {isOrganizer && (
        <Styled.Container>
          <Button
            styleType={BUTTON_TYPE.PRIMARY}
            onClick={() => {
              navigate(
                `${routes.edit}?type=${EDIT_TYPE.FUND_UPDATE}&fundId=${fundId}`,
              );
            }}
          >
            작성하기
          </Button>
        </Styled.Container>
      )}
      {data?.pages?.map((page) =>
        page?.updates?.map((info) => (
          <Update
            key={info?.updateId}
            title={info?.title}
            content={info?.content}
            createdAt={info?.createdAt}
          />
        )),
      )}
    </>
  );
}

export default UpdateWrapper;
