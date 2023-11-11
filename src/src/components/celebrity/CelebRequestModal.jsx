import { PropTypes } from "prop-types";
import styled from "styled-components";
import BackdropModal from "@/components/common/modal/BackdropModal.jsx";
import Button from "../common/button/Button";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE";

const Styled = {
  Title: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  `,
  CelebInfo: styled.div`
    display: flex;
  `,
  Img: styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 0.25rem;
  `,
  TextInfo: styled.div`
    width: 100%;
    margin-left: 1rem;
    display: relative;
  `,
  NameAndGroup: styled.div`
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .name {
      font-size: 1.3rem;
      font-weight: 600;
    }

    .group {
      color: ${({ theme }) => theme.color.addition};
      margin-left: 0.25rem;
      margin-top: 0.2rem;
      font-size: 1rem;
    }
  `,
  CategoryAndGender: styled.div`
    margin: 0.25rem 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.addition};
  `,
  BottomButtons: styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  `,
};

function CelebRequestModal({
  setOpen,
  celebName,
  celebGender,
  celebCategory,
  celebGroup,
  profileImage,
}) {
  return (
    <BackdropModal setOpen={setOpen} modalStyle={{ padding: "2rem" }}>
      <Styled.Title>셀럽 신청을 승인하시겠습니까?</Styled.Title>
      <Styled.CelebInfo>
        <Styled.Img src={profileImage} alt={`${celebName} 프로필 사진`} />
        <Styled.TextInfo>
          <Styled.NameAndGroup>
            <div className="name">{celebName}</div>
            {celebGroup && <div className="group">{celebGroup}</div>}
          </Styled.NameAndGroup>

          <Styled.CategoryAndGender>{`${celebCategory} • ${celebGender}`}</Styled.CategoryAndGender>

          <Styled.BottomButtons>
            <Button
              styleType={BUTTON_TYPE.SECONDARY}
              style={{ padding: "0.5rem ", fontWeight: 600, flex: 1 }}
            >
              거절하기
            </Button>
            <Button
              styleType={BUTTON_TYPE.PRIMARY}
              style={{ padding: "0.5rem ", fontWeight: 600, flex: 1 }}
            >
              승인하기
            </Button>
          </Styled.BottomButtons>
        </Styled.TextInfo>
      </Styled.CelebInfo>
    </BackdropModal>
  );
}

CelebRequestModal.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default CelebRequestModal;
