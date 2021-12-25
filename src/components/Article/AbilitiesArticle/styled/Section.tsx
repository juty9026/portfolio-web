import styled from '@emotion/styled';
import { css } from '@emotion/react';

const themeLight = css`
  background-color: #fff;
  color: #8e8e93;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  em {
    color: #000;
  }
`;

const themeDark = css`
  background-color: #000;
  color: #6e6e73;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  em {
    color: #fff;
  }
`;

interface SectionProps {
  theme?: 'light' | 'dark';
}

const Section = styled.section<SectionProps>`
  width: 100%;
  min-height: 200vh;
  padding: 50vh 5vw 30vh 5vw;

  h3 {
    font-size: 4rem;
  }

  h4 {
    font-size: 3rem;
  }

  pre,
  p,
  span {
    font-size: 2rem;
  }

  em {
    font-style: normal;
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
