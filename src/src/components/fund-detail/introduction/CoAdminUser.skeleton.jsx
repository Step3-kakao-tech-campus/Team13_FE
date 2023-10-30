import styled from "styled-components";
import { Shimmer } from "@/styles/CommonStyle";

const Styled = {
  Container: styled.div`
    padding: 1rem;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.main};
    border-radius: 0.25rem;
    overflow: hidden;
  `,
  Profile: styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
  `,
  Nickname: styled.div`
    margin-left: 0.75rem;
    width: 3rem;
    height: 1.25rem;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
    border-radius: 0.25rem;
  `,
};

function CoAdminUserSkeleton() {
  return (
    <Styled.Container>
      <Styled.Profile>
        <Shimmer />
      </Styled.Profile>

      <Styled.Nickname>
        <Shimmer />
      </Styled.Nickname>
    </Styled.Container>
  );
}

export default CoAdminUserSkeleton;
