const EDIT_TYPE = {
  FUND_INTRODUCTION: "fundIntroduction",
  FUND_UPDATE: "fundUpdate",
};

const TITLE = {
  fundIntroduction: "펀딩 소개 수정",
  fundUpdate: "펀딩 업데이트 작성",
};

Object.freeze(EDIT_TYPE);
Object.freeze(TITLE);

export default { ...EDIT_TYPE, TITLE };
