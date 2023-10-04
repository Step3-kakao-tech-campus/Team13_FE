import { memo } from "react";

function SearchIcon() {
  return (
    <>
      <img
        width="36"
        height="36"
        src="https://img.icons8.com/material-rounded/192/4a4a4a/search.png"
        alt="search"
      />
      <div id="license" style={{ display: "none" }}>
        <a href="https://icons8.com/icon/83218/search">Search</a> icon by{" "}
        <a href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
}

export default memo(SearchIcon);
