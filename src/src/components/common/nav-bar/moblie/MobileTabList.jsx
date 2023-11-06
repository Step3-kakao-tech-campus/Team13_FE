import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import PAGE_LIST from "@/constants/PAGE_LIST.js";

const Styled = {
  TabList: styled.ul`
    width: 100%;
    height: 2.5rem;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,
  Tab: styled.li`
    width: calc(100% / 3);
    height: 100%;

    span {
      position: relative;
      margin: 0 auto;
      width: fit-content;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      font-weight: 400;
    }

    &[aria-selected="true"] span {
      font-weight: 600;
    }

    &[aria-selected="true"] span:after {
      position: absolute;
      bottom: -1px;
      left: -12px;
      right: -12px;
      height: 2px;
      background-color: ${({ theme }) => theme.color.subBlack};
      content: "";
    }
  `,
};

/**
 * 모바일 탭 버튼 바 컴포넌트 (메인, 펀딩, 셀럽 페이지)
 */
function MobileTabList() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Styled.TabList>
      {PAGE_LIST.NAV_BAR_TAB.map((page) => (
        <Styled.Tab
          key={page.title}
          aria-selected={page.uri === location.pathname && true}
          onClick={() => navigate(page.uri)}
        >
          <span>{page.title}</span>
        </Styled.Tab>
      ))}
    </Styled.TabList>
  );
}

export default MobileTabList;
