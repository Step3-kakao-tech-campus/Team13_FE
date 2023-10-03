import { useRef, memo } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

import Portal from "@/components/common/Portal.jsx";
import OriginBackdrop from "@/styles/Backdrop.js";
import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import routes from "@/constants/routes.js";
import useBodyStyleFixed from "@/hooks/useBodyStyleFixed.js";
import useOutsideClick from "@/hooks/useOutsideClick.js";
import PAGE_LIST from "@/constants/PAGE_LIST.js";

const Styled = {
  Backdrop: styled(OriginBackdrop)`
    display: block;
  `,
  SideBar: styled.section`
    position: relative;
    width: 250px;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.white};
  `,
  Profile: styled.article`
    padding: 2rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .profileImg {
      width: 40px;
      height: 40px;
      border-radius: 9999px;
    }

    .nickname {
      margin-left: 1rem;
      font-size: 1.25rem;
      font-weight: 600;
    }
  `,
  Menu: styled.li`
    padding-left: 2rem;
    height: 4rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  Logo: styled.div`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-family: ${({ theme }) => theme.fontFamily.logo};
    font-weight: 300;
    font-size: 2rem;
    color: ${({ theme }) => theme.color.highlight};
  `,
};

function MobileSideBar({ setIsSideBarOpen }) {
  const sideBarRef = useRef();
  const navigate = useNavigate();
  useOutsideClick(sideBarRef, () => setIsSideBarOpen(false));
  useBodyStyleFixed();

  const isLoggedIn = true;

  const userInfo = {
    profileUrl:
      "https://velog.velcdn.com/images/j8won/profile/55917697-2140-40be-ad07-d2d02137f38e/image.jpeg",
    name: "경주원",
  };

  return (
    <Portal>
      <Styled.Backdrop>
        <Styled.SideBar ref={sideBarRef}>
          <Styled.Profile>
            {isLoggedIn ? (
              <img
                className="profileImg"
                src={userInfo.profileUrl}
                alt="프로필 사진"
              />
            ) : (
              <TestAccountIcon size={40} />
            )}

            <div
              className="nickname"
              onClick={() => {
                isLoggedIn || navigate(routes.signIn);
              }}
            >
              {isLoggedIn ? userInfo.name : "로그인"}
            </div>
          </Styled.Profile>

          {isLoggedIn && (
            <ul>
              {PAGE_LIST.USER_MENU.map((page) => (
                <Styled.Menu
                  key={page.title}
                  onClick={() => {
                    navigate(page.uri);
                  }}
                >
                  {page.title}
                </Styled.Menu>
              ))}
            </ul>
          )}

          <Styled.Logo>fundering</Styled.Logo>
        </Styled.SideBar>
      </Styled.Backdrop>
    </Portal>
  );
}

MobileSideBar.propTypes = {
  setIsSideBarOpen: PropTypes.func.isRequired,
};

export default memo(MobileSideBar);
