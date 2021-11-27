import { css } from '@emotion/react';

const wrapper = css`
  display: flex;
`;

const flexContainer = css`
  width: 50%;
  justify-content: center;
`;

const contentContainer = css`
  background-color: transparent;
  padding: 2rem 4rem 2rem 4rem;
`;
const content = css`
  font-size: 1.5rem;
  text-align: left;
`;

export default { wrapper, flexContainer, contentContainer, content };
