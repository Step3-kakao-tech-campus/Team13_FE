import styled from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";

const Styled = {
  Container: styled.div`
    width: 4rem;
    height: 1.5rem;
    background-color: ${({ theme }) => theme.color.skeleton};
    border-radius: 0.25rem;
    overflow: hidden;
  `,
};

function CountdownBadgeSkeleton() {
  return (
    <Styled.Container>
      <Shimmer />
    </Styled.Container>
  );
}

export default CountdownBadgeSkeleton;
