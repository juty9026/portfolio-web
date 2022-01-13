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
    font-weight: bold;
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
    font-weight: bold;
  }
`;

interface SectionProps {
  theme?: 'light' | 'dark';
}

const Section = styled.section<SectionProps>`
  width: 100%;
  min-height: 200vh;
  padding: 50vh 5vw 30vh 5vw;

  @media (max-width: 767px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  h3 {
    font-size: 4rem;

    @media (max-width: 767px) {
      font-size: 2rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 3rem;
    }
  }

  h4 {
    font-size: 3rem;
  }

  pre,
  p,
  span {
    font-size: 1.5rem;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 1.25rem;
    }
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
