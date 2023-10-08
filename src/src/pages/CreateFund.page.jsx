import styled from "styled-components";
import { Title } from "@/styles/CommonStyle";

const Styled = {
  Container: styled.section`
    margin: 3rem 0;
    padding: 0 calc((100% - 41.5rem) / 2);
  `,
};

function CreateFundPage() {
  return (
    <Styled.Container>
      <Title>펀딩 주최하기</Title>
    </Styled.Container>
  );
}

export default CreateFundPage;
