import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";
import { PropTypes } from "prop-types";

import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import Button from "../common/button/Button";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE";

const Styled = {
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};

    padding: 1rem;
    height: 9.25rem;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    border-radius: 0.25rem;
    cursor: pointer;

    ${({ $isMobile }) =>
      !$isMobile &&
      css`
        &:hover {
          transform: ${({ theme }) => theme.transform.gridCard};
          box-shadow: ${({ theme }) => theme.boxShadow.gridCard};
          transition: ${({ theme }) => theme.transition.gridCard};
        }
      `}
  `,

  TextContainer: styled.div`
    width: calc(100% - 100px - 1rem);
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  `,

  Button: styled(Button)`
    width: 60px;
  `,

  Text: styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.color.addition};

    &.name {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.color.body};
    }

    span {
      margin-left: 0.25rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
};

/**
 * 셀럽 목록 조회 시, grid 템플릿 내부 정보 카드
 * @param {string | number} celebId 셀럽 아이디
 * @param {string} celebName 셀럽 이름
 * @param {string=} profileUrl 셀럽 프로필 사진 url
 */

function CelebRequestInfoCard({ celebId, celebName, profileUrl, openModal }) {
  const handleModalOpen = () => {
    openModal(true);
  };

  return (
    <Styled.Container $isMobile={isMobile}>
      {profileUrl ? (
        <Styled.ProfileImage
          src={profileUrl}
          alt={`${celebName} 프로필 사진`}
        />
      ) : (
        <TestAccountIcon size={100} />
      )}

      <Styled.TextContainer>
        <Styled.Text className="name">
          <span>손흥민</span>
        </Styled.Text>

        <Styled.Text>
          <span>(토트넘 핫스퍼)</span>
        </Styled.Text>

        <Styled.Text>
          <span>스포츠 • 남자</span>
        </Styled.Text>
      </Styled.TextContainer>

      <Button styleType={BUTTON_TYPE.SECONDARY} onClick={handleModalOpen}>
        자세히
      </Button>
    </Styled.Container>
  );
}

CelebRequestInfoCard.propTypes = {
  celebId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  celebName: PropTypes.string,
  profileUrl: PropTypes.string,
  openModal: PropTypes.func,
};

export default CelebRequestInfoCard;
