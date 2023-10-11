import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PAGE_LIST from "@/constants/PAGE_LIST.js";
import PCUserBtn from "@/components/common/nav-bar/pc/PCUserBtn.jsx";

const Styled = {
  Container: styled.nav`
    position: fixed;
    left: 0;
    z-index: 100;

    padding: 0 calc((100vw - 70rem) / 2 + 4rem);

    @media (max-width: 70rem) {
      padding: 0 4rem;
    }

    width: 100vw;
    height: 4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.color.white};
  `,
  MenuList: styled.ul`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  Menu: styled.li`
    margin: 0 1rem;
    width: 5rem;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    text-align: center;

    &:hover {
      background-color: ${({ theme }) => theme.color.border};
      border-radius: 0.25rem;
      font-weight: 600;
      transition: all ease-in-out 200ms;
    }
  `,
  Logo: styled.div`
    margin-right: 2rem;
    font-family: ${({ theme }) => theme.fontFamily.logo};
    font-weight: 300;
    font-size: 2rem;
    color: ${({ theme }) => theme.color.highlight};
  `,
  UserBtn: styled.button`
    background-color: ${({ theme }) => theme.color.white};
  `,
};

/**
 * PC 나비게이션 바 컴포넌트
 */

function PCNavBar() {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.MenuList>
        <Styled.Logo>fundering</Styled.Logo>
        {PAGE_LIST.NAV_BAR_TAB.map((page) => (
          <Styled.Menu
            key={page.title}
            onClick={() => {
              navigate(page.uri);
            }}
          >
            {page.title}
          </Styled.Menu>
        ))}
      </Styled.MenuList>
      <PCUserBtn />
    </Styled.Container>
  );
}

export default PCNavBar;
