import { PropTypes } from "prop-types";

function UserIcon({ size = 16 }) {
  return (
    <>
      <img
        width={size}
        height={size}
        src="https://img.icons8.com/material-rounded/192/aaaaaa/user.png"
        alt="user"
      />
      <div id="license" style={{ display: "none" }}>
        <a href="https://icons8.com/icon/83190/user">User</a> icon by{" "}
        <a href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
}

UserIcon.propTypes = {
  size: PropTypes.number,
};

export default UserIcon;
