import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "@/styles/theme.js";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  html, body {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.color.body};
    max-width: 100%;
    min-height: calc(var(--vh, 1vh) * 100);
    overflow-x: hidden;
    background-color: #F8F9FA;
    text-underline-position: under;
  }
  
  button {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    padding: 0;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
  
   a {
    text-decoration: none;
    color: inherit;
  }
   
   input {
     font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
     outline: none;
   }
   
   input::placeholder {
     color: ${theme.color.addition};
   }

  textarea {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

`;

export default GlobalStyle;
