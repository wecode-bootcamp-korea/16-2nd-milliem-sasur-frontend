import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap');
  ${reset}
  body {
    font-family: 'Noto Sans KR', 'Noto Serif KR', 'sans-serif', 'serif';
  font-size:13px;
  overflow-x: hidden;
  }
  *{
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video,button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  ol, ul {
    list-style: none;
  }
  input,button{
    outline: none;
    border:0;
    background:none;
  }
  
  button{
    cursor: pointer;
  }
  
  textarea{
    outline: none;
    border:none;
    resize: none;
  }
  
  a{
    text-decoration: none;
  }
  
  
`;
export default GlobalStyles;
