import { PropTypes } from "prop-types";

function MoneyIcon({ size = 16 }) {
  return (
    <>
      <img
        width={size}
        height={size}
        src="https://img.icons8.com/material-rounded/192/aaaaaa/money-bag.png"
        alt="money-bag"
      />
      <div id="license" style={{ display: "none" }}>
        <a href="https://icons8.com/icon/85150/money">Money</a> icon by{" "}
        <a href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
}

MoneyIcon.propTypes = {
  size: PropTypes.number,
};

export default MoneyIcon;
