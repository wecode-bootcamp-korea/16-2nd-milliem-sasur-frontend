import { css } from 'styled-components';

const theme = {
  mainFontColor: '#6f6f6f',
  white: '#fff',
  background: '#fff',
  fontColor: '#242424',
  normalFontSize: '14px',
  largeFontSize: '16px',
  mainWrapWidth: '1280px',
  marginCenter: '0 auto',
  btnColor: '#333',
  thinGray:'#eee',
};

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DisBlock = css`
  display: block;
`;

export const inBlock = css`
  display: inline-block;
`;
export const padding = css`
  padding: 6px 10px;
`;
export const magin = css`
  margin: 0 8px;
`;
export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexDefault = css`
  display: flex;
  align-items: center;
`;

export const appearance = css`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export default theme;
