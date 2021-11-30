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
  margin: 2rem 0 2rem 0;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10;
`;

const title = css`
  font-size: 6rem;
  letter-spacing: 1rem;
  color: #fafafa;
  text-align: left;
  text-shadow: 2px 2px 6px rgb(150, 150, 150);
`;

export default { container, fullHeight, titleContainer, title };
