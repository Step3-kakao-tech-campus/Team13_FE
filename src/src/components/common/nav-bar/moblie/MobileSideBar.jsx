import { useRef, memo } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

import Portal from "@/components/common/modal/Portal.jsx";
import OriginBackdrop from "@/styles/Backdrop.js";
import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import routes from "@/constants/routes.js";
import useBodyStyleFixed from "@/hooks/useBodyStyleFixed.js";
import useOutsideClick from "@/hooks/useOutsideClick.js";
import PAGE_LIST from "@/constants/PAGE_LIST.js";
import { useAtomValue } from "jotai";
import accessTokenAtom from "@/storage/accessToken.atom.js";
import userProfileImageUrlAtom from "@/storage/userProfileImageUrl.atom.js";
import userNicknameAtom from "@/storage/userNickname.atom.js";

const Keyframes = {
  appear: keyframes`
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  `,
};

const Styled = {
  Backdrop: styled(OriginBackdrop)`
    display: block;
  `,
  SideBar: styled.section`
    position: relative;
    width: 250px;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.white};
    animation: ${Keyframes.appear} 0.5s 1;
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

/**
 * 모바일 상단바 메뉴 버튼을 누르면 나오는 사이드바 컴포넌틑
 * @param {React.Dispatch.SetStateAction} setIsSideBarOpen
 */

function MobileSideBar({ setIsSideBarOpen }) {
  const sideBarRef = useRef();
  const navigate = useNavigate();
  useOutsideClick(sideBarRef, () => setIsSideBarOpen(false));
  useBodyStyleFixed();

  const accessToken = useAtomValue(accessTokenAtom);
  const profileImageUrl = useAtomValue(userProfileImageUrlAtom);
  const nickname = useAtomValue(userNicknameAtom);
  const isLoggedIn = accessToken && accessToken !== "";

  return (
    <Portal>
      <Styled.Backdrop>
        <Styled.SideBar ref={sideBarRef}>
          <Styled.Profile>
            {isLoggedIn && profileImageUrl ? (
              <img
                className="profileImg"
                src={profileImageUrl}
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
              {isLoggedIn ? nickname : "로그인"}
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
