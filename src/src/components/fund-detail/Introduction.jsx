import styled from "styled-components";
import CoAdministrator from "@/components/fund-detail/CoAdministrator.jsx";

const Styled = {
  Container: styled.div``,
  Title: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
  `,
  CoAdministratorBox: styled.div`
    padding: 1rem 0 2rem 0;
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-gap: 1rem;

    @media screen and (max-width: calc(600px + 2rem + 4rem)) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: calc(400px + 1rem + 4rem)) {
      grid-template-columns: repeat(1, 100%);
    }
  `,
};

const coAdminInfo = {
  userId: "sonnyfan",
  profileUrl:
    "https://velog.velcdn.com/images/j8won/profile/55917697-2140-40be-ad07-d2d02137f38e/image.jpeg",
  nickname: "마이쏘니",
};

function Introduction() {
  return (
    <Styled.Container>
      <Styled.Title>공동관리자</Styled.Title>
      <Styled.CoAdministratorBox>
        {Array(3)
          .fill(coAdminInfo)
          .map((coAdmin, index) => (
            <CoAdministrator
              key={index}
              userId={coAdmin.userId}
              profileUrl={coAdmin.profileUrl}
              nickname={coAdmin.nickname}
            />
          ))}
      </Styled.CoAdministratorBox>
      <Styled.Title>소개글</Styled.Title>
    </Styled.Container>
  );
}

export default Introduction;
