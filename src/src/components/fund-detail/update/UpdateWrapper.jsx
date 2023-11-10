import styled from "styled-components";
import Update from "@/components/fund-detail/update/Update.jsx";

const Styled = {
  Container: styled.div``,
  Title: styled.div`
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  `,
};

function UpdateWrapper() {
  return (
    <>
      <Update />
    </>
  );
}

export default UpdateWrapper;
