import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import MobileNavBar from "@/components/common/nav-bar/moblie/MobileNavBar.jsx";
import PCNavBar from "@/components/common/nav-bar/pc/PCNavBar.jsx";

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
};

function Layout() {
  return (
    <Styled.Body>
      {isMobile ? <MobileNavBar /> : <PCNavBar />}
      <Outlet />
    </Styled.Body>
  );
}

export default Layout;
