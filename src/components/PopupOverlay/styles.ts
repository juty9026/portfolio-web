import styled from '@emotion/styled';

export const Wrap = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  cursor: pointer;
  overflow-y: scroll;
`;

export const Container = styled.div`
  background-color: #0a192f;
  min-height: 150vh;
  cursor: auto;
  z-index: 30;

  @media (max-width: 767px) {
    margin: 1.5rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 2rem;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    margin: 3rem;
  }
  @media (min-width: 1440px) {
    margin: 5vh 10vw 5vh 10vw;
  }
`;
