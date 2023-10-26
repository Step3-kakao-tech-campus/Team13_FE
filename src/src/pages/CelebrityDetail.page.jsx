import styled from "styled-components";

import CelebTextInfo from "@/components/celebrity-detail/celebTextInfo.jsx";
import FollowButton from "@/components/celebrity/FollowButton.jsx";
import { GridTemplate } from "@/styles/CommonStyle";

const Styled = {
  TextInfoContainer: styled.div``,
};

function CelebrityDetailPage() {
  const celebInfo = {
    celebId: 1,
    celebName: "손흥민",
    profileUrl:
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
    fundInProgressNum: 30,
    totalFundMoney: 35000000,
    followerNum: 10000,
    isFollowing: false,
    rank: 1,
  };

  return (
    <>
      <div className="셀럽정보">
        <div className="프로필">
          <>
            <span>셀럽이름</span>
            <span>소속그룹(있으면 렌더링)</span>
          </>
          <>
            <span>분류</span>
            <span> . </span>
            <span>성별</span>
          </>
        </div>
        <div className="순위">
          <>
            <div>뱃지아이콘</div>
            <div>팔로워</div>
          </>
          <>
            <div>뱃지아이콘</div>
            <div>펀딩금액</div>
          </>
        </div>

        <Styled.TextInfoContainer>
          <FollowButton
            celebId={celebInfo.celebId}
            isFollowing={celebInfo.isFollowing}
            style={{ padding: "10px 14px", fontSize: "1rem" }}
          />
          <CelebTextInfo
            fundInProgressNum={celebInfo.fundInProgressNum}
            followerNum={celebInfo.followerNum}
            isFollowing={celebInfo.isFollowing}
            totalFundMoney={celebInfo.totalFundMoney}
          />
        </Styled.TextInfoContainer>
      </div>

      <div className="셀럽관련펀딩정보">
        <div>Tabs</div>
        <GridTemplate>
          <div>셀럽인포카드</div>
          <div>셀럽인포카드</div>
          <div>셀럽인포카드</div>
        </GridTemplate>
      </div>
    </>
  );
}

export default CelebrityDetailPage;
