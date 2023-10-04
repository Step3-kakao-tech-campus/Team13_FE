import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import MobileNavBar from "@/components/common/nav-bar/moblie/MobileNavBar.jsx";
import PCNavBar from "@/components/common/nav-bar/pc/PCNavBar.jsx";
import routes from "@/constants/routes.js";

const Styled = {
  Body: styled.div`
    padding: 0 calc((100vw - 70rem) / 2 + 2rem);
    @media (max-width: 70rem) {
      padding: 0 2rem;
    }

    width: 100vw;
    min-height: 100vh;

    background-color: ${({ theme }) => theme.color.bg};
  `,

  Container: styled.div`
    width: 100%;
  `,
};

/**
 * 반응형 나비게이션 바를 포함한 레이아웃
 */

function Layout() {
  const location = useLocation();

  const calPadding = () => {
    if (!isMobile) {
      return "4rem";
    }

    if (
      [routes.home, routes.fund, routes.celebrity].includes(location.pathname)
    ) {
      return "100px";
    } else {
      return "60px";
    }
  };

  return (
    <Styled.Body>
      {isMobile ? <MobileNavBar /> : <PCNavBar />}
      <Styled.Container style={{ paddingTop: calPadding() }}>
        <Outlet />
      </Styled.Container>
    </Styled.Body>
  );
}

export default Layout;
