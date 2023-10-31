const theme = {
  color: {
    highlight: "#000000",
    body: "#222222",
    addition: "#646464",
    inactive: "#aaaaaa",

    white: "#ffffff",
    bg: "#F8F9FA",

    border: "#F1F3F5",

    mainRed: "#ff6c6c",
    mainRedHover: "#EB4242",
    secondaryRed: "#FFF9F9",
    secondaryRedHover: "#FFE3E3",
    subBlack: "#4A4A4A",
    subBlackHover: "#282828",

    skeleton: "#e4e4e4",

    alertBlue: "#0F8CFF",
    kakaoYellow: "#FFEB02",
  },

  fontFamily: {
    main: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    logo: "'Teko', sans-serif",
    doHyeon: "'Do Hyeon', sans-serif",
  },

  border: {
    main: "1px solid #F1F3F5",
    strong: "1px solid #EAECEF",
    input: "1px solid #aaaaaa",
  },

  boxShadow: {
    gridCard: "rgba(0, 0, 0, 0.08) 0 12px 20px 0",
  },

  transform: {
    gridCard: "translateY(-8px)",
  },

  transition: {
    gridCard: "all ease-in-out 0.25s",
  },
};

Object.freeze(theme);
export default theme;
