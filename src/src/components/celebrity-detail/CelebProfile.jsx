import styled from "styled-components";
import { PropTypes } from "prop-types";

const Styled = {
  ProfileContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,

  NameAndAffiliation: styled.div`
    font-size: 1.5rem;
    font-weight: 600;

    & span {
      font-size: 1rem;
      font-weight: 400;
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.color.addition};
    }
  `,

  CategoryAndGender: styled.div`
    margin: 0.5rem 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.addition};
  `,

  Img: styled.img`
    width: 9.5rem;
    border-radius: 0.25rem;
  `,
};

/**
 * 셀럽 프로필 컴포넌트 - 셀럽신청에 명시했던 정보와 프로필이미지를 보여줌
 * @param {string} props.celebName - 셀럽의 이름
 * @param {string} props.affiliation - 셀럽의 소속
 * @param {string} props.celebCategory - 셀럽의 분류
 * @param {string} props.celebGender - 셀럽의 성별
 * @param {string} props.profileUrl - 셀럽의 프로필 사진 URL
 */

function CelebProfile({
  celebName,
  affiliation,
  celebCategory,
  celebGender,
  profileUrl,
}) {
  return (
    <Styled.ProfileContainer>
      <Styled.NameAndAffiliation>
        {celebName}
        {affiliation && <span>{affiliation}</span>}
      </Styled.NameAndAffiliation>

      <Styled.CategoryAndGender>{`${celebCategory} • ${celebGender}`}</Styled.CategoryAndGender>

      <Styled.Img src={profileUrl} alt="셀럽프로필사진" />
    </Styled.ProfileContainer>
  );
}

export default CelebProfile;

CelebProfile.propTypes = {
  celebName: PropTypes.string.isRequired,
  affiliation: PropTypes.string,
  celebCategory: PropTypes.string.isRequired,
  celebGender: PropTypes.string.isRequired,
  profileUrl: PropTypes.string,
};
