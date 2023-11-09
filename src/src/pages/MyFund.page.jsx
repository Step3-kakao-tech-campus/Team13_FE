import { useState } from "react";
import styled from "styled-components";
import Tabs from "@/components/common/button/TabButtons.jsx";
import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import TABS from "@/constants/TABS.js";
import DynamicRender from "@/components/my-fund/DynamicRender.jsx";
import useMyFundUserInfoQuery from "@/hooks/api/my-fund/useMyFundUserInfoQuery.js";

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
    img {
      width: 100px;
      height: 100px;
      border-radius: 9999px;
      object-fit: cover;
    }
  `,
};

function MyFundPage() {
  const { data } = useMyFundUserInfoQuery();
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
        {data?.profileUrl ? (
          <img src={data.profileUrl} alt={`프로필이미지 : ${data.nickname}`} />
        ) : (
          <TestAccountIcon size={"100"} />
        )}
        <div className="userName">{data?.nickname}님</div>
      </Styled.UserInfo>

      <Tabs tabInfoArray={tabInfoArray} style={{ margin: "1.7rem 0 3rem" }} />

      <DynamicRender type={selectedTab} />
    </Styled.Container>
  );
}

export default MyFundPage;
