import styled from "styled-components";
import useFundDetailInfoQuery from "@/hooks/api/fund/useFundDetailInfoQuery.js";
import { useNavigate, useParams } from "react-router-dom";
import ProfileImageName from "@/components/common/ProfileImageName.jsx";
import routes from "@/constants/routes.js";

const Styled = {
  Container: styled.article`
    padding: 1rem;
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.main};
    border-radius: 0.25rem;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      img {
        width: 100%;
      }
    }
  `,
  FundImg: styled.img`
    width: 40%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  `,
  TextInfoWrapper: styled.div`
    padding-bottom: 2rem;
    .title {
      padding-bottom: 0.5rem;
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 130%;
    }
  `,
};

function FundInfo() {
  const { fundId } = useParams();
  const { data } = useFundDetailInfoQuery({ fundId });
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <Styled.FundImg
        src={data?.thumbnailUrl}
        alt={`${data?.fundTitle}의 대표 사진`}
      />

      <Styled.TextInfoWrapper>
        <div className="title">{data?.fundTitle}</div>
        <ProfileImageName
          name={data?.celebrityName}
          imageUrl={data?.celebrityProfileUrl}
          onClick={() => {
            navigate(`${routes.celebrity}/${data?.celebrityId}`);
          }}
        />
      </Styled.TextInfoWrapper>
    </Styled.Container>
  );
}

export default FundInfo;
