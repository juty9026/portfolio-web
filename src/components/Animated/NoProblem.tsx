/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeOutUpside = keyframes`

  from {
    opacity: 1;
    transform: translate3d(0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -3rem, 0);
  }
`;

const fadeInUpside = keyframes`

  from {
    opacity: 0;
    transform: translate3d(0, 3rem, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0);
  }
`;

const Emphasis = styled.span`
  font-size: 3rem;
`;

const InlineDiv = styled.div`
  display: inline;
`;

interface Props {
  transform?: boolean;
}

interface AnimatedProps {
  animation: string;
}

const AnimatedDiv = styled.div<Props & AnimatedProps>`
  position: absolute;
  display: inline;
  margin: 0 0 0 0.5rem;
  ${({ transform, animation }) =>
    transform &&
    css`
      animation: ${animation} 2s ease;
    `}
`;

const NoProblem: React.FC<Props> = ({ transform }) => (
  <p>
    <InlineDiv>
      <Emphasis>No</Emphasis>
    </InlineDiv>
    <InlineDiv>
      <AnimatedDiv transform={transform} animation={fadeOutUpside}>
        <Emphasis>way.</Emphasis>
      </AnimatedDiv>
      <AnimatedDiv transform={transform} animation={fadeInUpside}>
        <Emphasis>problem.</Emphasis>
      </AnimatedDiv>
    </InlineDiv>
  </p>
);

export default NoProblem;
