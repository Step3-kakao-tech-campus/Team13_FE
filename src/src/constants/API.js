const AUTH = {
  LOGIN: "/login",
  SIGN_UP: "/signup",
  DELETE_ACCOUNT: "/delete-account",
};

const FUND = {
  GET_LIST: "/posts",
  LIKE: "/like",
};

const USER = {
  SETTING: "/user/setting",
};

Object.freeze(AUTH);
Object.freeze(FUND);
Object.freeze(USER);
export default { AUTH, FUND, USER };
