import styled from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";

const Styled = {
  Container: styled.div`
    padding: 6px 8px;
    margin-left: auto;
    height: 1.75rem;
    width: 2.75rem;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
  `,
};

function FollowButtonSkeleton({ ...htmlButtonProps }) {
  return (
    <Styled.Container {...htmlButtonProps}>
      <Shimmer />
    </Styled.Container>
  );
}

export default FollowButtonSkeleton;
