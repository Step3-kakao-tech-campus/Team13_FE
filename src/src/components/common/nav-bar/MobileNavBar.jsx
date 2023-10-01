import { useState } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

import MenuIcon from "@/assets/MenuIcon.jsx";
import MobileTabList from "@/components/common/nav-bar/MobileTabList.jsx";
import MobileSideBar from "@/components/common/nav-bar/MobileSideBar.jsx";

const Styled = {
  Container: styled.nav`
    position: fixed;
    left: 0;

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

function MobileNavBar({ isTabList }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

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
          <Styled.Logo>fundering</Styled.Logo>
          <div style={{ width: "2rem", height: "2rem" }}></div>
        </Styled.Head>

        {isTabList && <MobileTabList />}
      </Styled.Container>

      {isMenuOpen && <MobileSideBar setIsSideBarOpen={setIsMenuOpen} />}
    </>
  );
}

MobileNavBar.propTypes = {
  isTabList: PropTypes.bool,
};

MobileNavBar.defaultProps = {
  isTabList: false,
};

export default MobileNavBar;
