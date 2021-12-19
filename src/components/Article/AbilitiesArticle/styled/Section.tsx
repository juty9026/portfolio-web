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
  width: 100%;
  min-height: 100vh;
  padding: 50vh 5vw 30vh 5vw;

  & h3 {
    font-size: 4rem;
  }

  & h4 {
    font-size: 3rem;
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
