import { PropTypes } from "prop-types";

function ThirdRibbonIcon({ size = 48 }) {
  return (
    <>
      <img
        width={size}
        height={size}
        src="https://img.icons8.com/color/48/third-place-ribbon.png"
        alt="third-place-ribbon"
      />
      <div id="license" style={{ display: "none" }}>
        <a href="https://icons8.com/icon/2WK1cEIaoUzY/third-place-ribbon">
          Third Place Ribbon
        </a>
        icon by <a href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
}

ThirdRibbonIcon.propTypes = {
  size: PropTypes.number,
};
export default ThirdRibbonIcon;
