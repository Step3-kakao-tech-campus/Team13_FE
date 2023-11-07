import { useState } from "react";
import styled from "styled-components";
import Tabs from "@/components/common/button/TabButtons.jsx";
import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";

const Styled = {
  ProfileImage: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 9999px;
    object-fit: cover;
  `,
};

function MyFundPage() {
  const [sortType, setSortType] = useState(0);

  const tabInfoArray = [
    {
      title: "팔로잉",
      func: () => setSortType(0),
    },
    {
      title: "찜한목록",
      func: () => setSortType(1),
    },
    {
      title: "펀딩내역",
      func: () => setSortType(2),
    },
    {
      title: "주최한 펀딩",
      func: () => setSortType(3),
    },
  ];

  return (
    <>
      <div className="userInfo">
        <TestAccountIcon size={"50"} />

        <div className="userName">000님</div>
      </div>

      <Tabs tabInfoArray={tabInfoArray} style={{ paddingBottom: "1rem" }} />

      <div className="다이나믹렌더사용">탭에 따른 내용</div>
    </>
  );
}

export default MyFundPage;
