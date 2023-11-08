import { PropTypes } from "prop-types";

import TABS from "@/constants/TABS.js";
import MyFollowingList from "./MyFollowingList.jsx";
import MyHeartList from "./MyHeartList.jsx";
import MyFundingList from "./MyFundingList.jsx";
import MyHostingFundList from "./MyHostingFundList.jsx";

/**
 * My펀딩페이지 탭 버튼 선택에 따른 하단 컴포넌트 변경
 * @param {string} type 탭 타입 TABS.FUND_DETAIL 중 하나
 */

function DynamicRender({ type }) {
  switch (type) {
    case TABS.MY_FUND.FOLLOWING:
      return <MyFollowingList />;
    case TABS.MY_FUND.HEART_LIST:
      return <MyHeartList />;
    case TABS.MY_FUND.FUNDING_LIST:
      return <MyFundingList />;
    case TABS.MY_FUND.HOST_FUND:
      return <MyHostingFundList />;
    default:
      return <div>잘못 선택되었습니다 다시 선택해 주세요</div>;
  }
}

DynamicRender.propTypes = {
  type: PropTypes.string.isRequired,
};

export default DynamicRender;
