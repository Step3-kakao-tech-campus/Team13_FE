import styled from "styled-components";
import formatDateToYYYYMMDD from "@/utils/formateDateToYYYYMMDD";
import QuillStrToHtml from "@/components/common/QuillStrToHtml";

const Styled = {
  Container: styled.div`
    margin: 1rem 0;
  `,
  Title: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
  `,
  Time: styled.div`
    padding: 0.25rem 0 1rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.color.addition};
  `,
};

function Update({ title, content, createdAt }) {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Time>{formatDateToYYYYMMDD(new Date(createdAt))}</Styled.Time>
      <QuillStrToHtml htmlStr={content} />
    </Styled.Container>
  );
}

export default Update;
