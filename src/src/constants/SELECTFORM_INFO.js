const GENDER = [
  { label: "남자", value: "MALE" },
  { label: "여자", value: "FEMALE" },
];

const CATEGORY = [
  { label: "가수", value: "SINGER" },
  { label: "배우", value: "ACTOR" },
  { label: "코미디언", value: "COMEDIAN" },
  { label: "스포츠", value: "SPORTS" },
  { label: "인플루언서", value: "INFLUENCER" },
  { label: "기타", value: "ETC" },
];

Object.freeze(GENDER);
Object.freeze(CATEGORY);

export default { GENDER, CATEGORY };
