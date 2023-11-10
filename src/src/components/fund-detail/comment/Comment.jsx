import styled from "styled-components";
import TestAccountIcon from "@/assets/icon/TestAccountIcon";

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  `,

  UserProfileBox: styled.div`
    padding-right: 0.75rem;

    img {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 9999px;
      object-fit: cover;
    }
  `,

  TextWrapper: styled.div``,

  ButtonWrapper: styled.div``,
};

function Comment() {
  const profileUrl =
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg";

  return (
    <Styled.Container>
      <Styled.UserProfileBox>
        {profileUrl ? (
          <img src={profileUrl} alt={`프로필 사진`} />
        ) : (
          <TestAccountIcon />
        )}
      </Styled.UserProfileBox>

      <div>
        <Styled.TextWrapper>d</Styled.TextWrapper>
        <Styled.ButtonWrapper>ss</Styled.ButtonWrapper>
      </div>
    </Styled.Container>
  );
}

export default Comment;
