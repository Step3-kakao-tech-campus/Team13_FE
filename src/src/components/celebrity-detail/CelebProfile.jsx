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
    width: 9rem;
    border-radius: 0.25rem;
  `,
};

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

CelebProfile.PropTypes = {
  celebName: PropTypes.string.isRequired,
  affiliation: PropTypes.string,
  celebCategory: PropTypes.string.isRequired,
  celebGender: PropTypes.string.isRequired,
  profileUrl: PropTypes.string,
};
