import routes from "@/constants/routes.js";

const NAV_BAR_TAB = [
  { title: "홈", uri: routes.home },
  { title: "펀딩", uri: routes.fund },
  { title: "셀럽", uri: routes.celebrity },
];

const USER_MENU = [
  { title: "MY 펀딩", uri: routes.myFund },
  { title: "내 계정", uri: routes.myAccount },
];

Object.freeze(NAV_BAR_TAB);
Object.freeze(USER_MENU);

export default { NAV_BAR_TAB, USER_MENU };
