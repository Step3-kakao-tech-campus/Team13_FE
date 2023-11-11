import styled from "styled-components";
import formatDateToYYYYMMDD from "@/utils/formateDateToYYYYMMDD";

const Styled = {
  Container: styled.div`
    margin: 1rem 0;
  `,
  Title: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
  `,
  Time: styled.div`
    padding-top: 0.25rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.color.addition};
  `,
  Content: styled.div`
    padding-top: 1rem;
  `,
};

function Update({ title, content, createdAt }) {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Time>{formatDateToYYYYMMDD(new Date(createdAt))}</Styled.Time>
      <Styled.Content>{content}</Styled.Content>
    </Styled.Container>
  );
}

export default Update;
