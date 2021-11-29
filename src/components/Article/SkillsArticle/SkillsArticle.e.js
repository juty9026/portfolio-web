import { css } from '@emotion/react';

const wrapper = css`
  display: flex;
  background-color: transparent;
`;

const flexContainer = css`
  width: 50%;
  justify-content: center;
  padding: 0 3rem 0 3rem;
`;

const contentContainer = css`
  background-color: transparent;
  padding: 2rem 4rem 2rem 4rem;
  font-size: 1.5rem;
  text-align: left;
`;

export default { wrapper, flexContainer, contentContainer };
