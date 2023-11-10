import { useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useInfiniteWithdrawInfoQuery from "@/hooks/api/fund/useInfiniteWithdrawInfoQuery.js";
import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import WithdrawInfoBar from "@/components/fund-detail/withdraw/WithdrawInfoBar.jsx";
import InfiniteWithdrawInfoLoader from "@/components/fund-detail/withdraw/InfiniteWithdrawInfo.loader.jsx";
import { PropTypes } from "prop-types";

const Styled = {
  TotalMoneyBar: styled.div`
    padding: 1.5rem 0 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${({ theme }) => theme.border.strong};

    font-size: 1.25rem;
    font-weight: 600;
    .left-money {
      color: ${({ theme }) => theme.color.mainRed};
    }
  `,
};

/**
 * 출금 내역 무한스크롤
 * @param {boolean} isOrganizer
 */

function InfiniteWithdrawInfo({ isOrganizer }) {
  const { fundId } = useParams();
  const loaderRef = useRef();

  const { data: withdrawInfoData, fetchNextPage } =
    useInfiniteWithdrawInfoQuery({ fundId });

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  return (
    <>
      <Styled.TotalMoneyBar>
        <div className="description">남은 금액</div>
        <div className="left-money">
          {withdrawInfoData?.pages[0]?.data?.currentBalance?.toLocaleString(
            "ko-KR",
          )}
          원
        </div>
      </Styled.TotalMoneyBar>
      {withdrawInfoData?.pages?.map((page) =>
        page?.data?.withdrawalDTOs.map((info, index) => (
          <WithdrawInfoBar
            key={index}
            isOrganizer={isOrganizer}
            id={info?.withdrawId}
            date={new Date(info?.withdrawTime)}
            usageTitle={info?.usage}
            evidenceUrl={info?.evidenceUrl}
            withdrawMoney={info?.withdrawAmount}
            totalMoney={info?.balance}
          />
        )),
      )}

      <InfiniteWithdrawInfoLoader loaderRef={loaderRef} />
    </>
  );
}

InfiniteWithdrawInfo.propTypes = {
  isOrganizer: PropTypes.bool,
};

export default InfiniteWithdrawInfo;
