const DEFAULT = {
  MALE: "MALE",
  FEMALE: "FEMALE",
};

const KOREAN = {
  MALE: "남성",
  FEMALE: "여성",
};

Object.freeze(DEFAULT);
Object.freeze(KOREAN);

export default { ...DEFAULT, KOREAN };
