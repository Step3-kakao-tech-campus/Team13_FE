import { useParams } from "react-router-dom";
import styled from "styled-components";

import useCelebDetailInfoQuery from "@/hooks/api/celebrity/useCelebDetailInfoQuery.js";

import CelebProfile from "@/components/celebrity-detail/CelebProfile.jsx";
import CelebRank from "@/components/celebrity-detail/CelebRank.jsx";
import CelebTextInfo from "@/components/celebrity-detail/CelebTextInfo.jsx";

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

  ProfileImage: styled.img`
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 0.25rem;
  `,

  TextInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

/**
 * 셀럽 상세정보 컴포넌트
 * : 셀럽상세 페이지 상단 프로필, 팔로워/펀딩금액별 순위, 자세한텍스트정보
 */

function CelebDetailInfo() {
  const { celebId } = useParams();
  const { data } = useCelebDetailInfoQuery({ celebId: celebId });

  return (
    <Styled.CelebInfoContainer>
      <CelebProfile
        celebName={data?.celebName}
        celebGroup={data?.celebGroup}
        celebCategory={data?.celebCategory}
        celebGender={data?.celebGender}
        celebId={data?.celebId}
        isFollowing={data?.isFollowing}
      />

      <Styled.CelebInfoBottomBox>
        <Styled.ProfileImage
          src={data?.profileUrl}
          alt={`${data?.celebName}의 프로필 사진`}
        />

        <CelebRank
          followerRank={data?.rank.follower}
          fundingRank={data?.rank.fundMoney}
        />

        <CelebTextInfo
          fundInProgressNum={data?.fundInProgressNum}
          followerNum={data?.followerNum}
          isFollowing={data?.isFollowing}
          totalFundMoney={data?.totalFundMoney}
        />
      </Styled.CelebInfoBottomBox>
    </Styled.CelebInfoContainer>
  );
}

export default CelebDetailInfo;
