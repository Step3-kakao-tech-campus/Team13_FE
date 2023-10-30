import styled from "styled-components";

const Styled = {
  Container: styled.div`
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .image {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 9999px;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
    }

    .name {
      margin-left: 0.25rem;
      height: 0.8rem;
      width: 3rem;
      color: ${({ theme }) => theme.color.addition};
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
      border-radius: 0.25rem;
    }
  `,
};

function ProfileImageNameSkeleton() {
  return (
    <Styled.Container>
      <div className="image" />
      <a className="name">{name}</a>
    </Styled.Container>
  );
}

export default ProfileImageNameSkeleton;
