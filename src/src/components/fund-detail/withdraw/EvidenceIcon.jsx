import styled from "styled-components";

const Styled = {
  Container: styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.kakaoYellow};
    font-size: 1.25rem;
    font-weight: 600;
    border-radius: 9999px;
    border: 6px solid ${({ theme }) => theme.color.kakaoYellow};
    background-color: ${({ theme }) => theme.color.white};
  `,
};

function EvidenceIcon() {
  return <Styled.Container>f</Styled.Container>;
}

export default EvidenceIcon;
