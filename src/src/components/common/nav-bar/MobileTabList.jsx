import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import routes from "@/constants/routes.js";
import { useEffect } from "react";

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

function MobileTabList() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabPageList = [
    { name: "홈", uri: routes.home },
    { name: "펀딩", uri: routes.fund },
    { name: "셀럽", uri: routes.celebrity },
  ];

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <Styled.TabList>
      {tabPageList.map((tabPage) => (
        <Styled.Tab
          key={tabPage.name}
          aria-selected={tabPage.uri === location.pathname && true}
          onClick={() => navigate(tabPage.uri)}
        >
          <span>{tabPage.name}</span>
        </Styled.Tab>
      ))}
    </Styled.TabList>
  );
}

export default MobileTabList;
