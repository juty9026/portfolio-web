import { css } from '@emotion/react';

const card = css`
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 0 10vw 0 10vw;
  padding: 2vh 2vw 2vh 2vw;
`;

const cardRow = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 2vh 0 2vh 0;
`;

const cardRowTitle = css`
  flex: 0 1 30%;
  font-size: 1.2rem;
  text-align: center;
`;

const cardRowContent = css`
  flex: 0 1 70%;
  font-size: 1.2rem;
  text-align: center;
`;

export default { card, cardRow, cardRowTitle, cardRowContent };
