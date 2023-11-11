const AUTH = {
  LOGIN: "/login",
  SIGN_UP: "/signup",
  DELETE_ACCOUNT: "/delete-account",
  EMAIL_DUPLICATE: "/signup/check",
};

const FUND = {
  LIST: "/posts",
  WRITE: "/posts/write",
  LIKE: (fundId) => `/posts/${fundId}/heart`,
  UNLIKE: (fundId) => `/posts/${fundId}/unHeart`,
  CO_ADMIN: (fundId) => {
    return `/posts/${fundId}/admins`;
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
  COMMENT: (fundId) => `/posts/${fundId}/comments`,
  COMMENT_REPLY: ({ fundId, commentId }) =>
    `/posts/${fundId}/comments/${commentId}`,
  UPDATE: (fundId) => `/posts/${fundId}/updates`,
};

const USER = {
  SETTING: "/user/setting",
};

const CELEBRITY = {
  LIST: "/celebs",
  REGISTER: "/celebs",
  RECOMMEND: "/celebs/recommend",
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
  WITHDRAWAL: "/myfunding/withdrawal",
  APPROVAL: "/myfunding/withdrawal/approval",
  REJECTION: "/myfunding/withdrawal/rejection",
};

Object.freeze(AUTH);
Object.freeze(FUND);
Object.freeze(USER);
Object.freeze(CELEBRITY);
Object.freeze(MY_FUND);
export default { AUTH, FUND, USER, CELEBRITY, MY_FUND };
