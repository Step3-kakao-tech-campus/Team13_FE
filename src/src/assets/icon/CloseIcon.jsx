import { PropTypes } from "prop-types";

function CloseIcon({ size }) {
  return (
    <>
      <img
        width={size}
        height={size}
        src="https://img.icons8.com/material-rounded/192/646464/delete-sign.png"
        alt="delete-sign"
      />
      <div id="license" style={{ display: "none" }}>
        <a href="https://icons8.com/icon/83149/close">Close</a> icon by{" "}
        <a href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
}

CloseIcon.propTypes = {
  size: PropTypes.number,
};

CloseIcon.defaultProps = {
  size: 20,
};

export default CloseIcon;
