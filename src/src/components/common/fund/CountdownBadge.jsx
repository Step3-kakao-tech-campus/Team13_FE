import styled from "styled-components";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.div`
    width: 4rem;
    height: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.75px;
    color: ${({ theme }) => theme.color.mainRed};
    background-color: #ffe3e3;

    border-radius: 0.25rem;

    &.closed {
      background-color: ${({ theme }) => theme.color.addition};
      color: ${({ theme }) => theme.color.white};
    }
  `,
};

/**
 * 카운트다운 뱃지 공통 컴포넌트
 * @param {string} target 목표 날짜와 시간 문자열
 */

function CountdownBadge({ target }) {
  const targetDate = new Date(target).getTime();

  const [countdown, setCountdown] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const getReturnValues = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    if (seconds <= 0) return "마감됨";
    if (minutes <= 0) return `${seconds}초 남음`;
    if (hours <= 0) return `${minutes}분 남음`;
    if (days <= 0) return `${hours}시간 남음`;
    return `${days}일 남음`;
  };

  return (
    <Styled.Container
      className={getReturnValues(countdown) === "마감됨" && "closed"}
    >
      {getReturnValues(countdown)}
    </Styled.Container>
  );
}

CountdownBadge.propTypes = {
  target: PropTypes.string,
};

export default CountdownBadge;
