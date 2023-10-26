import { GridTemplate } from "@/styles/CommonStyle";

function CelebrityDetailPage() {
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
        <div className="텍스트정보">
          <button>팔로우버튼</button>
          <div className="텍스트컨테이너">
            <div>
              <div>아이콘</div>
              <div>몇명팔로우중</div>
            </div>
            <div>
              <div>아이콘</div>
              <div>총 금액</div>
            </div>
            <div>
              <div>아이콘</div>
              <div>몇개 펀딩진행중</div>
            </div>
          </div>
        </div>
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
