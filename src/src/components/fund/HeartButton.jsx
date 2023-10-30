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
 * @param {number} size 하트 크기 (px)
 * @param {html.Attributes} htmlDivProps 기타
 */

function HeartButton({ isActive, size, ...htmlDivProps }) {
  return (
    <Styled.Container {...htmlDivProps}>
      {isActive ? (
        <FilledHeartIcon size={size} />
      ) : (
        <EmptyHeartIcon size={size} />
      )}
    </Styled.Container>
  );
}

HeartButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  size: PropTypes.number,
};

export default HeartButton;
