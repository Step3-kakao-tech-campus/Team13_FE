import styled from "styled-components";
import { useState } from "react";
import formatDateToYYYYMMDD from "@/utils/formateDateToYYYYMMDD";
import EvidenceIcon from "@/components/fund-detail/withdraw/EvidenceIcon.jsx";
import EvidenceModal from "@/components/fund-detail/withdraw/EvidenceModal.jsx";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.div`
    margin: 1rem 0;
    width: 100%;
  `,
  Date: styled.div`
    padding-bottom: 0.25rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.color.addition};
  `,
  Bar: styled.div`
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.main};
    border-radius: 0.25rem;
    cursor: ${({ $pointer }) => $pointer && "pointer"};
    overflow: clip;
  `,
  EvidenceWrapper: styled.div`
    padding-right: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .usage-title {
      padding-left: 0.5rem;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
  EvidenceImg: styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
  `,
  MoneyWrapper: styled.div`
    .withdraw-money {
      padding-bottom: 0.25rem;
      font-weight: 600;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .total-money {
      text-align: right;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.inactive};
    }
  `,
};

/**
 * 출금 내역 컴포넌트
 * @param {boolean} isOrganizer
 * @param {number} id
 * @param {Date} date
 * @param {string} usageTitle
 * @param {string=} evidenceUrl
 * @param {number} withdrawMoney
 * @param {number} totalMoney
 */

function WithdrawInfoBar({
  isOrganizer,
  id,
  date,
  usageTitle,
  evidenceUrl,
  withdrawMoney,
  totalMoney,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Styled.Container
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <Styled.Date>{formatDateToYYYYMMDD(new Date(date))}</Styled.Date>
        <Styled.Bar $pointer={evidenceUrl || isOrganizer}>
          <Styled.EvidenceWrapper>
            {evidenceUrl ? (
              <Styled.EvidenceImg
                src={evidenceUrl}
                alt={`${usageTitle} 증거 사진`}
              />
            ) : (
              <EvidenceIcon />
            )}
            <div className="usage-title">{usageTitle}</div>
          </Styled.EvidenceWrapper>
          <Styled.MoneyWrapper>
            <div className="withdraw-money">
              -{withdrawMoney.toLocaleString("ko-KR")}원
            </div>
            <div className="total-money">
              {totalMoney.toLocaleString("ko-KR")}원
            </div>
          </Styled.MoneyWrapper>
        </Styled.Bar>
      </Styled.Container>

      {(evidenceUrl || isOrganizer) && isModalOpen && (
        <EvidenceModal
          withdrawId={id}
          isOrganizer={isOrganizer}
          title={usageTitle}
          evidenceImgUrl={evidenceUrl}
          setOpen={setIsModalOpen}
        />
      )}
    </>
  );
}

WithdrawInfoBar.propTypes = {
  isOrganizer: PropTypes.bool,
  id: PropTypes.number,
  date: PropTypes.any,
  usageTitle: PropTypes.string,
  evidenceUrl: PropTypes.string,
  withdrawMoney: PropTypes.number,
  totalMoney: PropTypes.number,
};

export default WithdrawInfoBar;
