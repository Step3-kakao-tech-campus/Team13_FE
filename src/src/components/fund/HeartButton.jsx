import { PropTypes } from "prop-types";
import FilledHeartIcon from "@/assets/icon/FilledHeartIcon.jsx";
import EmptyHeartIcon from "@/assets/icon/EmptyHeartIcon.jsx";
import styled from "styled-components";

const Styled = {
  Container: styled.button`
    width: 1.5rem;
    height: 1.5rem;

    display: grid;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    cursor: pointer;
  `,
};

/**
 * true일 때 빨강색, false일 때 빈 하트
 * @param {boolean} isActive 클릭된 여부
 * @param props 기타
 */

function HeartButton({ isActive, ...props }) {
  return (
    <Styled.Container {...props}>
      {isActive ? <FilledHeartIcon /> : <EmptyHeartIcon />}
    </Styled.Container>
  );
}

HeartButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default HeartButton;
