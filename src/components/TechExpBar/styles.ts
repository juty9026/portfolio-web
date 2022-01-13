import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { a } from 'react-spring';

interface WrapProps {
  active?: boolean;
  clickable?: boolean;
}
export const Wrap = styled.div<WrapProps>`
  margin: 0.4rem 0 0.4rem 0;
  padding: 0.4rem;
  border: 2px solid transparent;
  border-radius: 0.3rem;
  ${({ active, clickable }) => {
    if (active) {
      return css`
        border-color: #25d7af;
        transition: all 1s;
      `;
    }
    if (clickable) {
      return css`
        cursor: pointer;
      `;
    }
  }}
`;

export const ExpBar = styled.div`
  height: 2.2rem;
  border-radius: 0.3rem;
  background-color: #eeeeee;
`;

export const AnimatedExp = styled(a.div)`
  position: absolute;
  height: 100%;
  border-radius: inherit;
  background-color: #03b58d;
`;

// noinspection CssReplaceWithShorthandSafely
export const Tag = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #25d7af;
  color: #ffffff;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 0.6rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 0.9rem;
  }
  @media (min-width: 1440px) {
    font-size: 1rem;
  }
`;

export const Number = styled.span`
  position: absolute;
  height: 100%;
  top: 0;
  right: 1.2rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
`;
