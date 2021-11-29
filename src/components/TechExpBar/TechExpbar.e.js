import { css } from '@emotion/react';

const wrapper = css`
  width: 100%;
  text-align: left;
  margin: 1rem 0 1rem 0;
`;

const title = css`
  font-size: 1.2rem;
`;

const expBar = css`
  background-color: rgb(200, 200, 200);
  width: 100%;
  height: 0.4rem;
  border-radius: 1rem;
`;

const exp = css`
  width: 50%;
  height: 100%;
  border-radius: 1rem;
`;

export default { wrapper, title, expBar, exp };
