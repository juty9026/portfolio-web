import { css } from '@emotion/react';

const container = css`
  display: flex;
  flex-direction: column;
`;

const headline = css`
  display: flex;
  flex: 1;
`;

const headlineLeft = css`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 40px 0 40px;
`;

const headlineRight = css`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  padding: 0 40px 0 40px;
`;

const projectName = css`
  font-size: 24px;
  font-weight: bold;
  padding: 6px;
  margin: 0;
`;

const partner = css`
  color: rgb(150, 150, 150);
  font-size: 24px;
  padding: 6px;
  margin: 0;
`;

const period = css`
  color: rgb(100, 100, 100);
  font-size: 20px;
  padding: 8px;
  margin: 0;
`;

const techStackContainer = css`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const techStackItem = css`
  padding: 6px;
`;

const roleContainer = css``;

const commentContainer = css``;

export default {
  container,
  headline,
  headlineLeft,
  headlineRight,
  projectName,
  partner,
  period,
  techStackContainer,
  techStackItem,
  roleContainer,
  commentContainer,
};
