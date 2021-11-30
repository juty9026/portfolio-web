import { css } from '@emotion/react';

const cardContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const card = css`
  flex: 0 0 30%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 6vh 6vw 6vh 6vw;
  z-index: 1;
  padding: 1vh 1vw 1vh 1vw;
  font-size: 1rem;
`;

const cardSubject = css`
  padding: 0 0 1rem 0;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
`;

const spacer = css`
  height: 1rem;
`;

const parallaxContainer = css`
  width: 100vw;
  height: calc(100% - 4vh);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  color: #0066ff;
`;

const parallaxRow = css`
  flex: 1;
  display: flex;
  justify-content: space-around;
`;

const parallaxSpan = css`
  flex: 1;
  text-shadow: -2px -2px 1px #dddddd;
`;

export default { cardContainer, card, cardSubject, spacer, parallaxContainer, parallaxRow, parallaxSpan };
