import { Shimmer } from "@/styles/CommonStyle";
import styled from "styled-components";
import ProfileImageNameSkeleton from "@/components/common/ProfileImageName.skeleton.jsx";
import MoneyDateSkeleton from "@/components/fund-detail/information/MoneyDate.skeleton.jsx";
import SimpleCelebCardSkeleton from "@/components/celebrity/SimpleCelebCard.skeleton.jsx";

const Styled = {
  InfoWrap: styled.article`
    padding-bottom: 2rem;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    border-bottom: ${({ theme }) => theme.border.strong};

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  `,
  Thumbnail: styled.div`
    width: calc(100% - 22.5rem - 2rem);
    aspect-ratio: 16/10;
    border-radius: 0.25rem;
    object-fit: cover;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;

    @media screen and (max-width: 767px) {
      width: 100%;
    }
  `,
  Container: styled.div`
    padding-left: 2rem;
    width: 22.5rem;

    @media screen and (max-width: 767px) {
      padding: 2rem 0 0;
      width: 100%;
    }
  `,
  Title: styled.div`
    margin-bottom: 0.25rem;
    height: 1.5rem;
    width: 100%;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
  `,
  ParticipantRow: styled.div`
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${({ theme }) => theme.border.strong};
  `,
  ParticipantBox: styled.div`
    width: 5rem;
    height: 1.25rem;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
  `,
  ButtonBox: styled.div`
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-gap: 0.5rem;

    div {
      height: 3rem;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }
  `,

  AdditionalDetailInstruction: styled.div`
    padding: 1rem;
    margin-bottom: 1rem;
    height: 50px;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
  `,
};

function InformationSkeleton() {
  return (
    <Styled.InfoWrap>
      <Styled.Thumbnail>
        <Shimmer />
      </Styled.Thumbnail>

      <Styled.Container>
        <Styled.Title>
          <Shimmer />
        </Styled.Title>
        <Styled.Title style={{ width: "70%", marginBottom: "0.5rem" }}>
          <Shimmer />
        </Styled.Title>

        <ProfileImageNameSkeleton />

        <MoneyDateSkeleton />

        <Styled.ParticipantRow>
          <Styled.ParticipantBox>
            <Shimmer />
          </Styled.ParticipantBox>

          <Styled.ParticipantBox $isRed={true}>
            <Shimmer />
          </Styled.ParticipantBox>
        </Styled.ParticipantRow>

        <Styled.ButtonBox>
          <div>
            <Shimmer />
          </div>
          <div>
            <Shimmer />
          </div>
        </Styled.ButtonBox>

        <Styled.AdditionalDetailInstruction>
          <Shimmer />
        </Styled.AdditionalDetailInstruction>

        <SimpleCelebCardSkeleton />
      </Styled.Container>
    </Styled.InfoWrap>
  );
}

export default InformationSkeleton;
