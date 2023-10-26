import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import ProfileImageName from "@/components/common/ProfileImageName.jsx";
import routes from "@/constants/routes.js";
import useFundDetailInfoQuery from "@/hooks/api/fund/useFundDetailInfoQuery.js";
import FundMoneyCountdown from "@/components/fund/FundMoneyCountdown.jsx";
import MoneyBar from "@/components/fund-detail/information/MoneyBar.jsx";

const Styled = {
  InfoWrap: styled.article`
    padding-bottom: 2rem;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    border-bottom: ${({ theme }) => theme.border.strong};

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  `,
  Thumbnail: styled.img`
    width: calc(100% - 22.5rem - 2rem);
    aspect-ratio: 16/10;
    border-radius: 0.25rem;
    object-fit: cover;

    @media screen and (max-width: 767px) {
      width: 100%;
    }
  `,
  Container: styled.div`
    padding-left: 2rem;
    width: 22.5rem;

    @media screen and (max-width: 767px) {
      padding: 2rem 0 0;
      width: 100%;
    }
  `,
  Title: styled.div`
    padding-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 130%;
  `,
  MoneyBar: styled.div`
    position: relative;
    margin-bottom: 1.5rem;
    width: 100%;
    height: 10px;
    background-color: #d0d0d0;
    border-radius: 0.25rem;
    overflow: hidden;

    .current-money-bar {
      width: ${({ $width }) => $width ?? "50%"};
      height: 100%;
      position: absolute;
      background-color: ${({ theme }) => theme.color.mainRed};
    }
  `,
};

function Information() {
  const navigate = useNavigate();
  const { fundId } = useParams();
  const { data } = useFundDetailInfoQuery({ fundId: fundId });

  return (
    <Styled.InfoWrap>
      <Styled.Thumbnail
        src={data?.thumbnailUrl}
        alt={`${data?.fundTitle}의 대표 사진`}
      />

      <Styled.Container>
        <Styled.Title>{data?.fundTitle}</Styled.Title>
        <ProfileImageName
          name={data?.organizerName}
          imageUrl={data?.organizerProfileUrl}
          onClick={() => navigate(`${routes.user}/${data?.organizerId}`)}
        />

        <FundMoneyCountdown
          targetDate={data?.targetDate}
          targetMoney={data?.targetMoney}
          currentMoney={data?.currentMoney}
          style={{ padding: "1rem 0 0.5rem 0" }}
        />

        <MoneyBar
          currentMoney={data?.currentMoney}
          targetMoney={data?.targetMoney}
        />
      </Styled.Container>
    </Styled.InfoWrap>
  );
}

export default Information;
