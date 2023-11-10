import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import routes from "@/constants/routes";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import useInfiniteWithdrawalFundQuery from "@/hooks/api/my-fund/useInfiniteWithdrawalFundQuery.js";
import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import { MyFundWithdrawalInfoDto } from "@/api/dto/myFund.dto.js";

import ProfileImageName from "@/components/common/ProfileImageName.jsx";
import Button from "@/components/common/button/Button.jsx";
import WithdrawalModal from "@/components/my-fund/approve-withdrawal/WithdrawalModal.jsx";

const Styled = {
  Container: styled.article`
    margin-top: 1.5rem;
    box-sizing: content-box;
    min-height: 230px;
    padding: 1.5rem;

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
    border-radius: 0.25rem;
  `,

  RightWrapper: styled.div`
    padding: 0.5rem 2rem;
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
    padding-bottom: 0.6rem;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 130%;
  `,

  ProfileBox: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,

  BottomBox: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  WithdrawalInfo: styled.div`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.addition};

    .amount {
      margin-top: 0.6rem;
      color: ${({ theme }) => theme.color.mainRed};
    }
  `,
};

/**
 * My펀딩 - 출금승인 대기목록 카드
 */

function WithdrawalFundInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const loaderRef = useRef();

  const { data: infiniteWithdrawalFundData, fetchNextPage } =
    useInfiniteWithdrawalFundQuery();

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  const mapInfoToWithdrawlFundDto = (info) => {
    return new MyFundWithdrawalInfoDto({ ...info });
  };

  return (
    <>
      {infiniteWithdrawalFundData?.pages.map((page) =>
        page?.data?.withdrawalApplyFundList.map((info, index) => (
          <Styled.Container key={index} {...mapInfoToWithdrawlFundDto(info)}>
            <Styled.FundImage
              src={info.thumbnailUrl}
              alt={`${info.fundTitle}의 대표 사진`}
            />

            <Styled.RightWrapper>
              <Styled.TopBox>
                <Styled.Title>{info.fundTitle}</Styled.Title>
                <Styled.ProfileBox>
                  <ProfileImageName
                    name={info.organizerName}
                    imageUrl={info.organizerProfileUrl}
                    onClick={() => {
                      navigate(`${routes.user}/${info.organizerId}`);
                    }}
                  />
                </Styled.ProfileBox>
              </Styled.TopBox>

              <Styled.BottomBox>
                <Styled.WithdrawalInfo>
                  <div>{info.withdrawlHistory}</div>
                  <div className="amount">
                    {Number(info.withdrawlAmount).toLocaleString("ko-KR")}원
                  </div>
                </Styled.WithdrawalInfo>
                <Button
                  styleType={BUTTON_TYPE.SECONDARY}
                  style={{ padding: "0.7rem 1.3rem ", fontSize: "1.25rem" }}
                  onClick={() => setIsModalOpen(true)}
                >
                  자세히
                </Button>
                {isModalOpen && <WithdrawalModal setOpen={setIsModalOpen} />}
              </Styled.BottomBox>
            </Styled.RightWrapper>
          </Styled.Container>
        )),
      )}
    </>
  );
}
export default WithdrawalFundInfo;
