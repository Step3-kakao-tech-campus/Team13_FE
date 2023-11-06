import { PropTypes } from "prop-types";

function InProgressIcon({ size = 16 }) {
  return (
    <>
      <img
        width={size}
        height={size}
        src="https://img.icons8.com/material-rounded/192/aaaaaa/in-progress.png"
        alt="in-progress"
      />
      <div id="license" style={{ display: "none" }}>
        <a href="https://icons8.com/icon/84100/in-progress">In Progress</a> icon
        by <a href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
}

InProgressIcon.propTypes = {
  size: PropTypes.number,
};

export default InProgressIcon;
