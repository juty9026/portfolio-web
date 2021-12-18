/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const moveLeft = keyframes`

  from {
    transform: translate3d(0)
  }
  to {
    transform: translate3d(-10px, 0, 0)
  }
`;

const moveLeftI = keyframes`

  from {
    transform: translate3d(10px, 0, 0)
  }
  to {
    transform: translate3d(0)
  }
`;

const fadeIn = keyframes`

  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Emphasis = styled.span`
  font-size: 3rem;
`;

const IAmPossible: React.FC = () => {
  return (
    <p>
      <div
        css={css`
          animation: ${moveLeft} 2s ease;
          display: inline-block;
        `}
      >
        <div
          css={css`
            animation: ${moveLeftI} 2s ease;
            display: inline-block;
          `}
        >
          <Emphasis>I</Emphasis>
        </div>
        <div
          css={css`
            animation: ${fadeIn} 2s ease;
            display: inline-block;
          `}
        >
          <Emphasis>'</Emphasis>
        </div>
        <Emphasis>m</Emphasis>
      </div>
      <Emphasis>possible.</Emphasis>
    </p>
  );
};

export default IAmPossible;
