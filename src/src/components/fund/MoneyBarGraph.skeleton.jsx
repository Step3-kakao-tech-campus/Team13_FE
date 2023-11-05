import { Shimmer } from "@/styles/CommonStyle.js";
import styled from "styled-components";

const Styled = {
  TargetBar: styled.div`
    position: relative;
    width: 100%;
    height: 10px;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
    border-radius: 0.25rem;
  `,
};

function MoneyBarGraphSkeleton() {
  return (
    <Styled.TargetBar>
      <Shimmer />
    </Styled.TargetBar>
  );
}

export default MoneyBarGraphSkeleton;
