import { PropTypes } from "prop-types";

/**
 * 꽉 찬 하트 아이콘
 * @param {number} size 하트 크기 (px)
 */

function FilledHeartIcon({ size = 24 }) {
  return (
    <>
      <img
        width={size}
        height={size}
        src="https://img.icons8.com/ios-filled/100/FF6C6C/like--v1.png"
        alt="like--v1"
      />
      <div id="license" style={{ display: "none" }}>
        <a href="https://icons8.com/icon/7697/heart">Heart</a> icon by{" "}
        <a href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
}

FilledHeartIcon.propTypes = {
  size: PropTypes.number,
};

export default FilledHeartIcon;
