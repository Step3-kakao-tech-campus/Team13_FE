const SIGN_IN = {
  email: "",
  password: "",
};

const SIGN_UP = {
  email: "",
  password: "",
  nickname: "",
};

const MY_ACCOUNT = {
  nickname: "",
  phoneNumber: "",
  currentPassword: "",
  changedPassword: "",
};

Object.freeze(SIGN_IN);
Object.freeze(SIGN_UP);
Object.freeze(MY_ACCOUNT);
export default { SIGN_IN, SIGN_UP, MY_ACCOUNT };
