const AUTH = {
  LOGIN: "/login",
  SIGN_UP: "/signup",
  DELETE_ACCOUNT: "/delete-account",
};

const FUND = {
  LIST: "/posts",
  LIKE: "/posts/like",
  CO_ADMIN: (fundId) => {
    return `/posts/${fundId}/co-admin`;
  },
  INTRODUCTION: (fundId) => {
    return `/posts/${fundId}/introduction`;
  },
  DETAIL: (fundId) => {
    return `/posts/${fundId}`;
  },
};

const USER = {
  SETTING: "/user/setting",
};

const CELEBRITY = {
  LIST: "/celebs",
  REGISTER: "/celebs",
  FOLLOW: (celebId) => {
    return `/celebs/${celebId}/follow`;
  },
  UNFOLLOW: (celebId) => {
    return `/celebs/${celebId}/unfollow`;
  },
  DETAIL: (celebId) => {
    return `/celebs/${celebId}`;
  },
  FUNDING: (celebId) => {
    return `/celebs/${celebId}/posts`;
  },
};

Object.freeze(AUTH);
Object.freeze(FUND);
Object.freeze(USER);
Object.freeze(CELEBRITY);
export default { AUTH, FUND, USER, CELEBRITY };
