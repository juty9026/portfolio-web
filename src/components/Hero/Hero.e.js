import { css } from '@emotion/react';
import heroImage from '@images/hero.jpg';

const wrapper = css`
  background-image: url(${heroImage});
  background-size: cover;
  object-fit: contain;
  width: 100%;
  height: 100vh;
`;

const container = css`
  background-color: rgba(255, 255, 255, 0.4);
  width: 32%;
  height: 32%;
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 3%;
  display: flex;
  flex-direction: column;
`;

const helloContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transform: rotateZ(-10deg) translate(-20%, -22%);
`;

const hello = css`
  font-size: 2rem;
  letter-spacing: 0.2rem;
`;

const nameContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const name = css`
  font-size: 6rem;
  letter-spacing: 1rem;
`;

const positionContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const position = css`
  font-size: 2rem;
  letter-spacing: 0.3rem;
`;

export default { wrapper, container, helloContainer, hello, nameContainer, name, positionContainer, position };
