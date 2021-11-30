import { css } from '@emotion/react';

const container = css`
  display: flex;
  flex-direction: column;
  padding: 0 10vw 0 10vw;
`;

const fullHeight = css`
  height: 100vh;
`;

const titleContainer = css`
  padding: 1rem 0 1rem 0;
  width: 100%;
`;

const title = css`
  font-size: 6rem;
  letter-spacing: 1rem;
  color: #fafafa;
  text-align: left;
  text-shadow: 2px 2px 6px rgb(150, 150, 150);
`;

export default { container, fullHeight, titleContainer, title };
