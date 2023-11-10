const AUTH = {
  LOGIN: "/login",
  SIGN_UP: "/signup",
  DELETE_ACCOUNT: "/delete-account",
  EMAIL_DUPLICATE: "/signup/check",
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
  WITHDRAW: (fundId) => {
    return `/posts/${fundId}/withdrawals`;
  },
  BALANCE: (fundId) => {
    return `/posts/${fundId}/balance`;
  },
  WITHDRAW_IMAGE: ({ fundId, withdrawId }) => {
    return `/posts/${fundId}/withdrawals/${withdrawId}`;
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

const MY_FUND = {
  NICKNAME: "/myfunding/nickname",
  FOLLOW: "/myfunding/followers",
  LIKE: "/myfunding/like",
  SUPPORT: "/myfunding/support",
  HOST: "/myfunding/host",
};

Object.freeze(AUTH);
Object.freeze(FUND);
Object.freeze(USER);
Object.freeze(CELEBRITY);
Object.freeze(MY_FUND);
export default { AUTH, FUND, USER, CELEBRITY, MY_FUND };
