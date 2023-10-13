import { PropTypes } from "prop-types";

/**
 * 검색 아이콘
 * @param {number} size px 단위
 * @param props 기타
 */

function SearchIcon({ size, ...props }) {
  return (
    <>
      <img
        width={size}
        height={size}
        src="https://img.icons8.com/material-rounded/192/4a4a4a/search.png"
        alt="search"
        {...props}
      />
      <div id="license" style={{ display: "none" }}>
        <a href="https://icons8.com/icon/83218/search">Search</a> icon by{" "}
        <a href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
}

SearchIcon.propTypes = {
  size: PropTypes.number,
};

SearchIcon.defaultProps = {
  size: 28,
};

export default SearchIcon;
