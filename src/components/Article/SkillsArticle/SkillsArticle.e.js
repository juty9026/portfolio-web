import { css } from '@emotion/react';

const wrapper = css`
  display: flex;
  background-color: transparent;
`;

const flexContainer = css`
  justify-content: center;
`;

const leftContainer = css`
  width: 40%;
`;

const rightContainer = css`
  width: 60%;
`;

const contentContainer = css`
  background-color: transparent;
  padding: 2rem 4rem 2rem 4rem;
  font-size: 1.5rem;
  text-align: left;
`;

const spacer = css`
  margin: 2rem 0 2rem 0;
`;

export default { wrapper, flexContainer, leftContainer, rightContainer, contentContainer, spacer };
