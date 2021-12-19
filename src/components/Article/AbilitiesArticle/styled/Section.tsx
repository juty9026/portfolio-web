import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface SectionProps {
  theme?: 'light' | 'dark';
}

const textColor = css`
  pre,
  p,
  span {
    color: #6e6e73;
  }
`;
const themeLight = css`
  background-color: #fff;
  color: #000;
  ${textColor}
`;

const themeDark = css`
  background-color: #000;
  color: #fff;
  ${textColor}
`;

const Section = styled.section<SectionProps>`
  width: 100vw;
  min-height: 100vh;
  padding: 50vh 0 20vh 0;

  & h3 {
    display: inline-block;
    font-size: 4rem;
  }

  & p {
    font-size: 2rem;
  }

  ${({ theme }) => {
    switch (theme) {
      case 'light':
        return themeLight;
      case 'dark':
        return themeDark;
      default:
        return themeLight;
    }
  }}
`;

export default Section;
