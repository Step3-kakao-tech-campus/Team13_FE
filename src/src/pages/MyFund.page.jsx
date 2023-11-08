import { useState } from "react";
import styled from "styled-components";
import Tabs from "@/components/common/button/TabButtons.jsx";
import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import TABS from "@/constants/TABS.js";
import DynamicRender from "@/components/my-fund/DynamicRender.jsx";

const Styled = {
  Container: styled.section`
    padding: 4.5rem 0;
    width: 100%;
  `,
  UserInfo: styled.div`
    display: flex;
    align-items: center;

    .userName {
      margin-left: 1rem;
      font-size: 1.5rem;
      font-weight: 600;
    }
  `,
};

function MyFundPage() {
  const [selectedTab, setSeletedTab] = useState(TABS.MY_FUND.FOLLOWING);

  const tabInfoArray = Object.keys(TABS.MY_FUND).map((key) => {
    return {
      title: TABS.MY_FUND[key],
      func: () => {
        setSeletedTab(TABS.MY_FUND[key]);
      },
    };
  });

  return (
    <Styled.Container>
      <Styled.UserInfo>
        {/* {profileImage ? (
          <img src="" alt="" />
        ) : ( */}
        <TestAccountIcon size={"100"} />
        {/* // )} */}
        <div className="userName">000님</div>
      </Styled.UserInfo>

      <Tabs tabInfoArray={tabInfoArray} style={{ margin: "1.7rem 0 3rem" }} />

      <DynamicRender type={selectedTab} />
    </Styled.Container>
  );
}

export default MyFundPage;
