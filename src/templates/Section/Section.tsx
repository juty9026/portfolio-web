import styled from '@emotion/styled';
import { themeDark, themeLight } from './styles';

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
