import { PropTypes } from "prop-types";

import TABS from "@/constants/TABS.js";
import Introduction from "@/components/fund-detail/introduction/Introduction.jsx";
import Update from "@/components/fund-detail/update/Update.jsx";
import Comment from "@/components/fund-detail/comment/Comment.jsx";
import Withdraw from "@/components/fund-detail/withdraw/Withdraw.jsx";

/**
 * 펀딩 상세 페이지 탭 버튼 선택에 따른 하단 컴포넌트 변경
 * @param {string} type 탭 타입 TABS.FUND_DETAIL 중 하나
 * @param {boolean} isOrganizer 현재 접속자가 펀딩 생성자인지 여부
 */

function DynamicDetailRender({ type, isOrganizer }) {
  switch (type) {
    case TABS.FUND_DETAIL.INTRO:
      return <Introduction isOrganizer={isOrganizer} />;
    case TABS.FUND_DETAIL.UPDATE:
      return <Update />;
    case TABS.FUND_DETAIL.COMMENT:
      return <Comment />;
    case TABS.FUND_DETAIL.WITHDRAW:
      return <Withdraw isOrganizer={isOrganizer} />;
    default:
      return <div>잘못 선택되었습니다 다시 선택해 주세요</div>;
  }
}

DynamicDetailRender.propTypes = {
  type: PropTypes.string.isRequired,
  isOrganizer: PropTypes.bool.isRequired,
};

export default DynamicDetailRender;
