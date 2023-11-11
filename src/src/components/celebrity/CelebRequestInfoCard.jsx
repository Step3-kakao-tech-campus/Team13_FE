import { useState } from "react";
import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import TestAccountIcon from "@/assets/icon/TestAccountIcon.jsx";
import Button from "@/components/common/button/Button.jsx";
import CelebRequestModal from "@/components/celebrity/CelebRequestModal.jsx";

const Styled = {
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};

    padding: 1rem;
    height: 9.5rem;

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

  ProfileImage: styled.img`
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
};

function CelebRequestInfoCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tmp = {
    celebName: "도경수",
    celebGender: "남",
    celebCategory: "가수",
    celebGroup: "엑소",
    profileImage:
      "https://file2.nocutnews.co.kr/newsroom/image/2021/07/12/202107121100333094_0.jpg",
  };

  return (
    <Styled.Container>
      {tmp.profileImage ? (
        <Styled.ProfileImage
          src={tmp.profileImage}
          alt={`${tmp.celebName} 프로필 사진`}
        />
      ) : (
        <TestAccountIcon size={100} />
      )}
      <Styled.TextInfo>
        <Styled.NameAndGroup>
          <div className="name">{tmp.celebName}</div>
          {tmp.celebGroup && <div className="group">{tmp.celebGroup}</div>}
        </Styled.NameAndGroup>
        <Styled.CategoryAndGender>{`${tmp.celebCategory} • ${tmp.celebGender}`}</Styled.CategoryAndGender>
        <Button
          styleType={BUTTON_TYPE.SECONDARY}
          onClick={() => setIsModalOpen(true)}
          style={{ position: "absolute", right: "1rem", bottom: "1.4rem" }}
        >
          자세히
        </Button>
        {/* {isModalOpen && <CelebRequestModal setOpen={setIsModalOpen} />} */}
        {isModalOpen && <CelebRequestModal setOpen={setIsModalOpen} />}
      </Styled.TextInfo>
    </Styled.Container>
  );
}

export default CelebRequestInfoCard;
