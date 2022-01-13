import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { CSSProperties } from 'react';

const zoomInKeyframes = (transform: string | undefined) => keyframes`
  15% {
    transform: ${transform} scale(0.9);
  }
  100% {
    transform: ${transform} scale(1.6);
    z-index: 1;
  }
`;

export const Wrap = styled.div<CSSProperties>`
  text-align: center;
  display: inline-block;
  position: relative;
  border: solid 12px #fff;
  background: #fff;
  box-shadow: 0 0 15px 0 #555;
  transition: all 1s ease;
  top: 50px;

  & p {
    font-family: 'Vujahday Script', cursive;
    text-align: center;
  }

  &:hover {
    animation: ${({ style }) => zoomInKeyframes(style?.transform)} 1s ease both;
    z-index: 1;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;
