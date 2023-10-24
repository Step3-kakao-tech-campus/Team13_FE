const AUTH = {
  LOGIN: "/login",
  SIGN_UP: "/signup",
  DELETE_ACCOUNT: "/delete-account",
};

const FUND = {
  GET_LIST: "/posts",
  LIKE: "/like",
  CO_ADMIN: "/co-admin",
  INTRODUCTION: (fundId) => {
    return `/posts/${fundId}/introduction`;
  },
};

const USER = {
  SETTING: "/user/setting",
};

Object.freeze(AUTH);
Object.freeze(FUND);
Object.freeze(USER);
export default { AUTH, FUND, USER };
