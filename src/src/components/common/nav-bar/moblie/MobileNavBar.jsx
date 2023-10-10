import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@/assets/icon/MenuIcon.jsx";
import MobileTabList from "@/components/common/nav-bar/moblie/MobileTabList.jsx";
import MobileSideBar from "@/components/common/nav-bar/moblie/MobileSideBar.jsx";
import routes from "@/constants/routes.js";
import useIsInListPages from "@/hooks/useIsInListPages.js";

const Styled = {
  Container: styled.nav`
    position: fixed;
    left: 0;
    z-index: 100;

    background-color: ${({ theme }) => theme.color.white};
  `,
  Head: styled.div`
    padding: 0 1rem;
    width: 100vw;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  MenuBtn: styled.button`
    background-color: ${({ theme }) => theme.color.white};
  `,
  Logo: styled.div`
    font-family: ${({ theme }) => theme.fontFamily.logo};
    font-weight: 300;
    font-size: 2rem;
    color: ${({ theme }) => theme.color.highlight};
  `,
};

/**
 * 모바일 나비게이션 바 컴포넌트
 */

function MobileNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isInListPages = useIsInListPages();

  return (
    <>
      <Styled.Container>
        <Styled.Head>
          <Styled.MenuBtn
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
            }}
          >
            <MenuIcon />
          </Styled.MenuBtn>
          <Styled.Logo onClick={() => navigate(routes.home)}>
            fundering
          </Styled.Logo>
          <div style={{ width: "2rem", height: "2rem" }}></div>
        </Styled.Head>

        {isInListPages && <MobileTabList />}
      </Styled.Container>

      {isMenuOpen && <MobileSideBar setIsSideBarOpen={setIsMenuOpen} />}
    </>
  );
}

export default MobileNavBar;
