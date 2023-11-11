const KOREAN = {
  SINGER: "가수",
  ACTOR: "배우",
  COMEDIAN: "개그맨",
  SPORT: "스포츠",
  INFLUENCER: "인플루언서",
  ETC: "기타",
};

const DEFAULT = {
  SINGER: "SINGER",
  ACTOR: "ACTOR",
  COMEDIAN: "COMEDIAN",
  SPORT: "SPORT",
  INFLUENCER: "INFLUENCER",
  ETC: "ETC",
};

Object.freeze(KOREAN);
Object.freeze(DEFAULT);

export default { ...DEFAULT, KOREAN };
