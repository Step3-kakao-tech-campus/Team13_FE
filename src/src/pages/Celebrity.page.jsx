import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CelebInfoGridCard from "@/components/celebrity/CelebInfoGridCard.jsx";
import SearchBar from "@/components/common/SearchBar.jsx";
import FloatButton from "@/components/common/button/FloatButton.jsx";
import SortButtons from "@/components/common/button/SortButtons.jsx";
import BackdropModal from "@/components/common/modal/BackdropModal.jsx";
import PageTitle from "@/components/common/PageTitle.jsx";
import routes from "@/constants/routes.js";
import MainLayout from "@/components/common/template/MainLayout.jsx";
import { GridTemplate } from "@/styles/CommonStyle.js";

function CelebrityPage() {
  const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [keyword, setKeyword] = useState(searchParams.get("keyword"));

  useEffect(() => {
    setKeyword(searchParams.get("keyword"));
  }, [searchParams]);

  const sonnyCelebInfo = {
    celebId: 1,
    celebName: "손흥민",
    profileUrl:
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
    fundInProgressNum: 30,
    totalFundMoney: 35000000,
    followerNum: 10000,
    isFollowing: false,
  };

  return (
    <>
      <PageTitle
        title={
          searchParams?.get("keyword")
            ? `${searchParams?.get("keyword")} 셀럽`
            : "셀럽"
        }
      />
      <MainLayout>
        <h1>셀럽</h1>
        <SearchBar uri={routes.celebrity} />

        <div>
          <h1> {keyword ? `${keyword} 검색 결과` : "순위"}</h1>
          <SortButtons
            sortTypeArray={[
              { key: "펀딩총액순", func: () => {} },
              { key: "팔로워순", func: () => {} },
            ]}
          />
        </div>

        <GridTemplate>
          {new Array(6).fill(sonnyCelebInfo).map((info, index) => (
            <CelebInfoGridCard
              key={index}
              celebId={info.celebId}
              celebName={info.celebName}
              profileUrl={info.profileUrl}
              fundInProgressNum={info.fundInProgressNum}
              followerNum={info.followerNum}
              isFollowing={info.isFollowing}
              totalFundMoney={info.totalFundMoney}
            />
          ))}
        </GridTemplate>
        <FloatButton onClick={() => setIsModalOpen(true)}>
          셀럽 신청
        </FloatButton>
        {isModalOpen && (
          <BackdropModal setOpen={setIsModalOpen}>
            <h1>신청서를 담아올게요 커밍순!</h1>
          </BackdropModal>
        )}
      </MainLayout>
    </>
  );
}

export default CelebrityPage;
