import styled from "styled-components";
import { PropTypes } from "prop-types";
import FollowButton from "@/components/celebrity/FollowButton.jsx";

const Styled = {
  ProfileContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Text: styled.div`
    width: 100%;
  `,

  NameAndGroup: styled.div`
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
};

/**
 * 셀럽 프로필 컴포넌트 - 셀럽신청에 명시했던 정보와 프로필이미지를 보여줌
 * @param {string} celebName - 셀럽의 이름
 * @param {string} celebGroup - 셀럽의 소속
 * @param {string} celebCategory - 셀럽의 분류
 * @param {string} celebGender - 셀럽의 성별
 * @param {string || number} celebId - 셀럽의 아이디
 * @param {boolean} isFollowing - 팔로잉 여부
 */

function CelebProfile({
  celebName,
  celebGroup,
  celebCategory,
  celebGender,
  celebId,
  isFollowing = false,
}) {
  return (
    <Styled.ProfileContainer>
      <Styled.Text>
        <Styled.NameAndGroup>
          {celebName}
          {celebGroup && <span>{celebGroup}</span>}
        </Styled.NameAndGroup>

        <Styled.CategoryAndGender>{`${celebCategory} • ${celebGender}`}</Styled.CategoryAndGender>
      </Styled.Text>

      <FollowButton
        celebId={celebId}
        isFollowing={isFollowing}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
        }}
      />
    </Styled.ProfileContainer>
  );
}

export default CelebProfile;

CelebProfile.propTypes = {
  celebName: PropTypes.string.isRequired,
  celebGroup: PropTypes.string,
  celebCategory: PropTypes.string.isRequired,
  celebGender: PropTypes.string.isRequired,
  profileUrl: PropTypes.string,
  celebId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isFollowing: PropTypes.bool,
};
