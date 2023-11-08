import { useState } from "react";
import styled from "styled-components";
import Tabs from "@/components/common/button/TabButtons.jsx";
import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import TABS from "@/constants/TABS.js";

const Styled = {};

function MyFundPage() {
  const [sortType, setSortType] = useState(TABS.MY_FUND.FOLLOWING);

  const tabInfoArray = Object.keys(TABS.MY_FUND).map((key) => {
    return {
      title: TABS.MY_FUND[key],
      func: () => {
        setSortType(key);
      },
    };
  });

  return (
    <>
      <div className="userInfo">
        <TestAccountIcon size={"100"} />
        <div className="userName">000님</div>
      </div>

      <Tabs tabInfoArray={tabInfoArray} style={{ paddingBottom: "1rem" }} />

      <div className="다이나믹렌더사용">탭에 따른 내용</div>
    </>
  );
}

export default MyFundPage;
