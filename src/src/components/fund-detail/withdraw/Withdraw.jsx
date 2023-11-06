import styled from "styled-components";
import { PropTypes } from "prop-types";
import { Suspense } from "react";
import Button from "@/components/common/button/Button.jsx";
import InfiniteWithdrawInfo from "@/components/fund-detail/withdraw/InfiniteWithdrawInfo.jsx";
import InfiniteWithdrawInfoLoader from "@/components/fund-detail/withdraw/InfiniteWithdrawInfo.loader.jsx";

const Styled = {
  Container: styled.div``,
  TitleBar: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.div`
    padding-right: 0.5rem;
    .title {
      padding-bottom: 0.5rem;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .description {
      font-size: 0.75rem;
    }
  `,
};

function Withdraw({ isOrganizer }) {
  return (
    <Styled.Container>
      <Styled.TitleBar>
        <Styled.Title>
          <div className="title">출금내역</div>
          <div className="description">
            해당 내역을 클릭하면 자세한 사용 내역 이미지를 확인할 수 있어요
          </div>
        </Styled.Title>
        {isOrganizer && <Button>출금하기</Button>}
      </Styled.TitleBar>

      <Suspense fallback={<InfiniteWithdrawInfoLoader />}>
        <InfiniteWithdrawInfo isOrganizer={isOrganizer} />
      </Suspense>
    </Styled.Container>
  );
}

Withdraw.propTypes = {
  isOrganizer: PropTypes.bool,
};

export default Withdraw;
