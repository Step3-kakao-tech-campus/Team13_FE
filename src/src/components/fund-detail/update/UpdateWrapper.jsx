import styled from "styled-components";
import Update from "@/components/fund-detail/update/Update.jsx";
import useInfiniteUpdate from "@/hooks/api/fund/useInfiniteUpdate.jsx";
import { useParams } from "react-router-dom";

const Styled = {
  Container: styled.div``,
  Title: styled.div`
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  `,
};

function UpdateWrapper() {
  const { fundId } = useParams();
  const { data } = useInfiniteUpdate({ fundId });
  return (
    <>
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
