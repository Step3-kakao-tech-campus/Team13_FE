import styled from "styled-components";
import { PropTypes } from "prop-types";
import routes from "@/constants/routes.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Styled = {
  Button: styled.button`
    padding: 0.75rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    background-color: ${({ theme }) => theme.color.kakaoYellow};
    border-radius: 0.25rem;
    cursor: pointer;

    &:hover {
      background-color: #f5e200;
      transition: background-color 0.3s ease-in-out;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.color.addition};
      color: ${({ theme }) => theme.color.white};
      cursor: not-allowed;
    }
  `,
};

/**
 * 결제하기 버튼
 * @param {number} price 결제 금액
 * @param {string} fundTitle 결제 제목
 * @param {boolean} disabled 버튼 비활성화
 */

function PaymentButton({ price, fundTitle, disabled }) {
  const naviagate = useNavigate();
  const onClickPayment = () => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp10064350");

    const directUrlBase = import.meta.env.DEV
      ? window.location.hostname + ":5173"
      : window.location.hostname;

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "kakaopay.TC0ONETIME", // PG사 카카오페이
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: price, // 결제금액
      name: fundTitle, // 주문명
      buyer_tel: "01012341234", // 구매자 전화번호
      m_redirect_url: directUrlBase + routes.mobilePayment, // 모바일만 redirect 됨
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백 함수 정의하기 */
  // PC만 콜백 함수 실행됨! 모바일은 리다이렉트 후 해당 페이지에서 작업
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      toast.success("결제 성공");
      naviagate(routes.myFund);
    } else {
      toast.error(`결제 실패: ${error_msg}`);
    }
  }

  return (
    <Styled.Button disabled={disabled} onClick={onClickPayment}>
      결제하기
    </Styled.Button>
  );
}

PaymentButton.propTypes = {
  price: PropTypes.number,
  fundTitle: PropTypes.string,
  disabled: PropTypes.bool,
};

export default PaymentButton;
