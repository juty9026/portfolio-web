import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { a } from 'react-spring';

interface WrapProps {
  bigFont?: boolean;
}
export const Wrap = styled.div<WrapProps>`
  display: inline-block;
  ${({ bigFont = false }) =>
    bigFont &&
    css`
      font-size: 6rem;

      @media (max-width: 767px) {
        font-size: 3rem;
      }
      @media (min-width: 768px) {
        font-size: 6rem;
      }
    `}
`;

interface AnimatedDivProps {
  absolute?: boolean;
}
export const AnimatedDiv = styled(a.div)<AnimatedDivProps>`
  display: inline-block;
  ${({ absolute = false }) =>
    absolute &&
    css`
      position: absolute;
      top: 0;
      left: 0;
    `}
`;
