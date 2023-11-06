import { PropTypes } from "prop-types";

function SecondRibbonIcon({ size = 48 }) {
  return (
    <>
      <img
        width={size}
        height={size}
        src="https://img.icons8.com/color/48/second-place-ribbon.png"
        alt="second-place-ribbon"
      />
      <div id="license" style={{ display: "none" }}>
        <a href="https://icons8.com/icon/2AxMUk3BMPIc/second-place-ribbon">
          Second Place Ribbon
        </a>
        icon by <a href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
}

SecondRibbonIcon.propTypes = {
  size: PropTypes.number,
};

export default SecondRibbonIcon;
