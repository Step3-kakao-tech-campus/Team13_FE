import { PropTypes } from "prop-types";

/**
 * 빈 하트 아이콘
 * @param {number} size
 */

function EmptyHeartIcon({ size = 24 }) {
  return (
    <>
      <img
        width={size}
        height={size}
        src="https://img.icons8.com/ios/100/ADADAD/like--v1.png"
        alt="like--v1"
      />
      <div id="license" style={{ display: "none" }}>
        <a href="https://icons8.com/icon/87/heart">Heart</a> icon by{" "}
        <a href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
}

EmptyHeartIcon.propTypes = {
  size: PropTypes.number,
};

export default EmptyHeartIcon;
