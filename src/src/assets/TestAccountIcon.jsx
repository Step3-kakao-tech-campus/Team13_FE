import { PropTypes } from "prop-types";

function TestAccountIcon({ size }) {
  return (
    <>
      <img
        width={size}
        height={size}
        src="https://img.icons8.com/color/40/test-account.png"
        alt="test-account"
      />
      <div id="license" style={{ display: "none" }}>
        <a href="https://icons8.com/icon/z-JBA_KtSkxG/test-account">
          Test Account
        </a>{" "}
        icon by <a href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
}

TestAccountIcon.propTypes = {
  size: PropTypes.string || PropTypes.number,
};

TestAccountIcon.defaultProps = {
  size: 36,
};

export default TestAccountIcon;
