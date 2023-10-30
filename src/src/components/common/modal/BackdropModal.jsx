import styled, { keyframes } from "styled-components";
import { useRef, useState } from "react";
import { PropTypes } from "prop-types";

import Portal from "@/components/common/modal/Portal.jsx";
import Backdrop from "@/styles/Backdrop.js";
import useBodyStyleFixed from "@/hooks/useBodyStyleFixed.js";
import useOutsideClick from "@/hooks/useOutsideClick.js";
import CloseIcon from "@/assets/icon/CloseIcon.jsx";

const Keyframes = {
  appear: keyframes`
  0% {
      opacity: 0;
      transform: translateY(100vh) scale(0);
    }
  100% {
    opacity: 1;
    
    transform: translateY(0) scale(1);
  }
`,
};

const Styled = {
  Backdrop: styled.div`
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.3);

    cursor: pointer;
  `,
  Container: styled.section`
    position: relative;

    padding: 2.5rem 1rem 1rem;
    min-width: 10rem;
    min-height: 8rem;

    overflow-y: auto;

    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 24px 4px;

    animation: ${Keyframes.appear} 0.5s 1;

    @media screen and (max-width: 768px) {
      padding-top: 4rem;
      width: 100vw;
      height: 100vh;
      border-radius: 0;
    }

    @media screen and (min-width: 769px) {
      max-height: 96vh;
    }
  `,
  CloseButton: styled.button`
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;

    background-color: ${({ theme }) => theme.color.white};
  `,
};

/**
 * 배경이 반투명인 반응형 모달창
 * @param {React.Dispatch.SetStateAction} setOpen 모달창 열림 상태 변경하는 set 함수
 * @param {object} style 모달창 스타일링
 * @param {React.ReactNode} children 모달창 내부 컴포넌트 및 엘리먼트
 */

function BackdropModal({ setOpen, modalStyle, children }) {
  const [isVisible, setIsVisible] = useState(true);
  const modalRef = useRef();
  useBodyStyleFixed();

  const closeModal = () => {
    setIsVisible(false);
    setOpen(false);
  };

  useOutsideClick(modalRef, () => {
    closeModal();
  });

  return (
    <Portal>
      <Backdrop>
        <Styled.Container
          ref={modalRef}
          style={modalStyle}
          $isVisible={isVisible}
        >
          <Styled.CloseButton onClick={closeModal}>
            <CloseIcon />
          </Styled.CloseButton>
          {children}
        </Styled.Container>
      </Backdrop>
    </Portal>
  );
}

BackdropModal.propTypes = {
  setOpen: PropTypes.func.isRequired,
  modalStyle: PropTypes.object,
  children: PropTypes.node,
};

BackdropModal.defaultProps = {
  modalStyle: {},
  children: "",
};

export default BackdropModal;
