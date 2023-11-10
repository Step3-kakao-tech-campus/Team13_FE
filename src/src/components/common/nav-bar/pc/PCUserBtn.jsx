import styled from "styled-components";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import routes from "@/constants/routes.js";
import useOutsideClick from "@/hooks/useOutsideClick.js";
import PAGE_LIST from "@/constants/PAGE_LIST.js";
import { useAtomValue } from "jotai";
import accessTokenAtom from "@/storage/accessToken.atom.js";
import userProfileImageUrlAtom from "@/storage/userProfileImageUrl.atom.js";

const Styled = {
  UserBtn: styled.button`
    position: relative;
    background-color: ${({ theme }) => theme.color.white};

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 9999px;
    }
  `,
  Modal: styled.ul`
    position: absolute;
    top: 2.5rem;
    right: -3rem;
    z-index: 1;

    padding: 1rem 0;
    width: 8rem;

    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.main};
    border-radius: 0.25rem;
  `,
  Menu: styled.li`
    padding-left: 1rem;
    width: 100%;
    height: 2rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-size: 0.8rem;

    &:hover {
      background-color: ${({ theme }) => theme.color.border};
      transition: all ease-in-out 200ms;
    }
  `,
};

/**
 * PC 나비게이션 바의 프로필 버튼 컴포넌트 (로그인 상태에 따라 변화)
 */

function PCUserBtn() {
  const navigate = useNavigate();
  const userBtnRef = useRef();
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  useOutsideClick(userBtnRef, () => setIsMenuModalOpen(false));

  const accessToken = useAtomValue(accessTokenAtom);
  const profileImageUrl = useAtomValue(userProfileImageUrlAtom);
  const isLoggedIn = accessToken && accessToken !== "";

  return (
    <Styled.UserBtn ref={userBtnRef}>
      {isLoggedIn && profileImageUrl ? (
        <img
          onClick={() => setIsMenuModalOpen(true)}
          className="profileImg"
          src={profileImageUrl}
          alt="프로필 사진"
        />
      ) : (
        <TestAccountIcon
          onClick={() => {
            navigate(routes.signIn);
          }}
        />
      )}

      {isMenuModalOpen && (
        <Styled.Modal>
          {PAGE_LIST.USER_MENU.map((page) => (
            <Styled.Menu
              key={page.title}
              onClick={() => {
                navigate(page.uri);
                setIsMenuModalOpen(false);
              }}
            >
              {page.title}
            </Styled.Menu>
          ))}
        </Styled.Modal>
      )}
    </Styled.UserBtn>
  );
}

export default PCUserBtn;
