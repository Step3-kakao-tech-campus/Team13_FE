import { PropTypes } from "prop-types";

/**
 * 퍼센트 반환
 * @param {number} current 비교하는 싶은 숫자
 * @param {number} target 비교 대상 숫자
 * @returns {number}
 */

const calculatePercentage = (current, target) => {
  return (current / target) * 100;
};

calculatePercentage.propTypes = {
  current: PropTypes.number,
  target: PropTypes.number,
};

export default calculatePercentage;
