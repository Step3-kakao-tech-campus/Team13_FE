import styled from "styled-components";
import { useState } from "react";
import ChangeProfileBox from "@/components/my-account/ChangeProfileBox.jsx";

const Styled = {
  Container: styled.div`
    margin-top: 4rem;
    padding: 0 calc((100vw - 22rem) / 2 - (100vw - 70rem) / 2 + 2rem);
    @media (max-width: 70rem) {
      padding: 0 calc((100vw - 22rem) / 2 - 2rem);
    }
  `,
  Title: styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
  `,
  ProfileBox: styled.div`
    padding: 1rem 0 0.75rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .profile-img {
      width: 100px;
      height: 100px;
      border-radius: 9999px;
      object-fit: cover;
    }
  `,
};

function MyAccountPage() {
  const [profileImageFile, setProfileImageFile] = useState(null);

  const loadedProfileUrl =
    "https://velog.velcdn.com/images/j8won/profile/55917697-2140-40be-ad07-d2d02137f38e/image.jpeg";

  return (
    <Styled.Container>
      <Styled.Title>회원정보 수정하기</Styled.Title>
      <ChangeProfileBox
        loadedUrl={loadedProfileUrl}
        imageFile={profileImageFile}
        setImageFile={setProfileImageFile}
      />
    </Styled.Container>
  );
}

export default MyAccountPage;
