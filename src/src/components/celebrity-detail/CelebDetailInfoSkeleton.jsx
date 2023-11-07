import styled from "styled-components";

import CelebProfileSkeleton from "./skeleton/CelebProfileSkeleton.jsx";
import CelebRankSkeleton from "./skeleton/CelebRankSkeleton.jsx";
import CelebTextInfoSkeleton from "./skeleton/CelebTextInfoSkeleton.jsx";
import { Shimmer } from "@/styles/CommonStyle.js";

const Styled = {
  CelebInfoContainer: styled.div`
    padding: 2rem calc((100% - 60rem) / 2);
  `,

  CelebInfoBottomBox: styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  `,

  ProfileImage: styled.div`
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
  `,

  TextInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

function CelebDetailInfoSkeleton() {
  return (
    <Styled.CelebInfoContainer>
      <CelebProfileSkeleton />

      <Styled.CelebInfoBottomBox>
        <Styled.ProfileImage>
          <Shimmer />
        </Styled.ProfileImage>

        <CelebRankSkeleton />

        <CelebTextInfoSkeleton />
      </Styled.CelebInfoBottomBox>
    </Styled.CelebInfoContainer>
  );
}

export default CelebDetailInfoSkeleton;
