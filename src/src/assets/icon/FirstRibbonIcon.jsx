import { PropTypes } from "prop-types";

function FirstRibbonIcon({ size = 48 }) {
  return (
    <>
      <img
        width={size}
        height={size}
        src="https://img.icons8.com/color/48/first-place-ribbon.png"
        alt="first-place-ribbon"
      />
      <div id="license" style={{ display: "none" }}>
        <a href="https://icons8.com/icon/VUt5dWfcfFzt/first-place-ribbon">
          First Place Ribbon
        </a>
        icon by <a href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
}

FirstRibbonIcon.propTypes = {
  size: PropTypes.number,
};

export default FirstRibbonIcon;
