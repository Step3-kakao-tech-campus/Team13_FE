const EDIT_TYPE = {
  FUND_INTRODUCTION: "fundIntroduction",
  FUND_UPDATE: "fundUpdate",
};

const PAGE_TITLE = {
  fundIntroduction: "펀딩 소개 수정",
  fundUpdate: "펀딩 업데이트 작성",
};

const TITLE = {
  fundIntroduction: "펀딩 소개 수정하기",
  fundUpdate: "펀딩 업데이트 작성하기",
};

const BUTTON = {
  fundIntroduction: "수정하기",
  fundUpdate: "업로드",
};

Object.freeze(EDIT_TYPE);
Object.freeze(TITLE);
Object.freeze(TITLE);
Object.freeze(BUTTON);

export default { ...EDIT_TYPE, PAGE_TITLE, TITLE, BUTTON };
