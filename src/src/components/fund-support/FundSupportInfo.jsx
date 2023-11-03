import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { PropTypes } from "prop-types";

import useFundDetailInfoQuery from "@/hooks/api/fund/useFundDetailInfoQuery.js";
import ProfileImageName from "@/components/common/ProfileImageName.jsx";
import routes from "@/constants/routes.js";
import FundMoneyCountdown from "@/components/fund/FundMoneyCountdown.jsx";
import MoneyBarGraph from "@/components/fund/MoneyBarGraph.jsx";

const Styled = {
  Container: styled.article`
    margin-top: 1.5rem;
    box-sizing: content-box;
    min-height: 220px;

    display: grid;
    grid-template-columns: 2fr 3fr;
    border: ${({ theme }) => theme.border.main};

    @media screen and (max-width: 767px) {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }

    background-color: ${({ theme }) => theme.color.white};
    border-radius: 0.25rem;
    overflow: hidden;
  `,
  FundImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  RightWrapper: styled.div`
    padding: 1.5rem;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  `,
  TopBox: styled.div`
    width: 100%;
    padding-bottom: 2rem;
  `,
  Title: styled.div`
    padding-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 130%;
  `,
  ProfileBox: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  BottomBox: styled.div`
    width: 100%;
  `,
};

/**
 * 후원하는 펀딩 정보
 * @param {func} setFundTitle fundTitle setState
 */

function FundSupportInfo({ setFundTitle }) {
  const { fundId } = useParams();
  const navigate = useNavigate();
  const { data } = useFundDetailInfoQuery({ fundId: fundId });

  useEffect(() => {
    setFundTitle(data.fundTitle);
  }, [data]);

  return (
    <Styled.Container>
      <Styled.FundImage
        src={data?.thumbnailUrl}
        alt={`${data?.fundTitle}의 대표 사진`}
      />

      <Styled.RightWrapper>
        <Styled.TopBox>
          <Styled.Title>{data?.fundTitle}</Styled.Title>
          <Styled.ProfileBox>
            <ProfileImageName
              name={data?.organizerName}
              imageUrl={data?.organizerProfileUrl}
              onClick={() => {
                navigate(`${routes.user}/${data?.organizerId}`);
              }}
            />
            <ProfileImageName
              name={data?.celebrityName}
              imageUrl={data?.celebrityProfileUrl}
              onClick={() => {
                navigate(`${routes.celebrity}/${data?.celebrityId}`);
              }}
            />
          </Styled.ProfileBox>
        </Styled.TopBox>

        <Styled.BottomBox>
          <FundMoneyCountdown
            currentMoney={data?.currentMoney}
            targetMoney={data?.targetMoney}
            targetDate={data?.endDate}
          />
          <MoneyBarGraph
            targetMoney={data?.targetMoney}
            currentMoney={data?.currentMoney}
          />
        </Styled.BottomBox>
      </Styled.RightWrapper>
    </Styled.Container>
  );
}

FundSupportInfo.propTypes = {
  setFundTitle: PropTypes.func,
};

export default FundSupportInfo;
