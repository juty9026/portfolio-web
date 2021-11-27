import { css } from '@emotion/react';

const container = css`
  display: flex;
  flex-direction: row;
`;

const subjectContainer = css`
  flex: 1;
`;

const itemContainer = css`
  flex: 1;
  text-align: left;
`;

export default { container, subjectContainer, itemContainer };
