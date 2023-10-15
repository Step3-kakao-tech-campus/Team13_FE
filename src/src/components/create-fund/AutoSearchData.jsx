import styled from "styled-components";
import { memo } from "react";
import TestAccountIcon from "@/assets/icon/TestAccountIcon";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.li`
    padding: 1rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    border-top: ${({ theme }) => theme.border.main};

    &:first-child {
      border: none;
    }
  `,
  Image: styled.img`
    width: 1.5rem;
    height: 1.5rem;
    object-fit: cover;
    border-radius: 9999px;
  `,
  Name: styled.div`
    margin-left: 0.5rem;
  `,
};

/**
 * 펀딩 주최 셀럽 검색 자동완성 결과 데이터 컴포넌트
 * @param {string} profileUrl 셀럽 프로필 url
 * @param {string} celebName 셀럽 이름
 * @param {function} onClick 클릭 이벤트 함수
 */

function AutoSearchData({ profileUrl, celebName, onClick }) {
  return (
    <Styled.Container onClick={onClick}>
      {profileUrl ? (
        <Styled.Image src={profileUrl} alt={`${celebName}의 프로필 사진`} />
      ) : (
        <TestAccountIcon size={24} />
      )}
      <Styled.Name>{celebName}</Styled.Name>
    </Styled.Container>
  );
}

AutoSearchData.propTypes = {
  profileUrl: PropTypes.string,
  celebName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

AutoSearchData.defaultProps = {
  profileUrl: "",
};

export default memo(AutoSearchData);
