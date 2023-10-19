const GENDER = [
  { label: "남자", value: "male" },
  { label: "여자", value: "female" },
];

const CATEGORY = [
  { label: "가수", value: "singer" },
  { label: "배우", value: "actor" },
  { label: "코미디언", value: "comedian" },
  { label: "스포츠", value: "sports" },
  { label: "인플루언서", value: "influencer" },
  { label: "기타", value: "etc" },
];

Object.freeze(GENDER);
Object.freeze(CATEGORY);

export default { GENDER, CATEGORY };
