import { css } from '@emotion/react';

export const themeLight = css`
  background-color: #fff;
  color: #8e8e93;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  em {
    color: #000;
    font-weight: bold;
  }
`;

export const themeDark = css`
  background-color: #000;
  color: #6e6e73;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  em {
    color: #fff;
    font-weight: bold;
  }
`;
