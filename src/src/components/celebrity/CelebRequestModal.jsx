import styled from "styled-components";
import { PropTypes } from "prop-types";

import BackdropModal from "@/components/common/modal/BackdropModal.jsx";
import Button from "@/components/common/button/Button.jsx";

import BUTTON_TYPE from "@/constants/BUTTON_TYPE";

/**
 * 셀럽 신청 모달 컴포넌트
 * @param {function(boolean)} setOpen 모달 상태 업데이트 함수
 */

const Styled = {
  Container: styled.div`
    @media screen and (min-width: 769px) {
      width: 20rem;
    }
  `,
  Title: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
  `,
  FormContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Label: styled.label`
    padding-bottom: 0.5rem;
    font-size: 1rem;
  `,
  Input: styled.input`
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    border: ${({ theme }) => theme.border.input};

    &::placeholder {
      color: ${({ theme }) => theme.color.inactive};
    }
  `,
  ButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem; /* 각 버튼 사이의 간격 조정 */
  `,
};

function CelebRequestModal({ setOpen }) {
  return (
    <BackdropModal setOpen={setOpen} modalStyle={{ padding: "3rem" }}>
      <Styled.Container>
        <Styled.Title>셀럽 신청을 승인하시겠습니까?</Styled.Title>

        <Styled.ButtonContainer>
          <Button
            onClick={() => setOpen(false)}
            styleType={BUTTON_TYPE.SECONDARY}
          >
            거절하기
          </Button>
          <Button onClick={() => setOpen(false)}>승인하기</Button>
        </Styled.ButtonContainer>
      </Styled.Container>
    </BackdropModal>
  );
}

CelebRequestModal.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default CelebRequestModal;
