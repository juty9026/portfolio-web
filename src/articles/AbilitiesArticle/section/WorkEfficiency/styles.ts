import styled from '@emotion/styled';

export const Headline = styled.p`
  padding: 2vh 0;
`;

export const ParallaxContainer = styled.div`
  position: absolute;
  top: 110vh;
  left: 0;
  width: 100vw;

  @media (max-width: 767px) {
    display: none;
  }
`;
