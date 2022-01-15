import styled from '@emotion/styled';
import checkMark from '@/assets/images/check-mark-240.png';
import externalLink from '@/assets/images/external-link-128.png';

export const GridContainer = styled.div`
  display: grid;
  min-height: 200vh;
  grid-template-areas:
    '.          flip-text '
    'content    .         '
    'footer     footer    ';
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100vh 100vh;

  @media (max-width: 1023px) {
    min-height: 100vh;
    grid-template-areas:
      'flip-text'
      'content'
      'footer';
    grid-template-columns: auto;
    grid-template-rows: repeat(2, fit-content(50vh)) min-content;
  }
`;

export const BaseGridItem = styled.div`
  padding: 0 5vw 0 5vw;
  display: flex;
  flex-direction: column;
  place-content: center;
`;

export const TextWithCheckMark = styled.p`
  &:before {
    content: '';
    background-image: url(${checkMark});
    background-size: 100% 100%;
    width: 0.8em;
    height: 0.8em;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.3em;
  }
`;

export const Anchor = styled.a`
  &:after {
    content: '';
    background-image: url(${externalLink});
    background-size: 100% 100%;
    width: 0.8em;
    height: 0.8em;
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.3em;
  }
`;

export const Content = styled(BaseGridItem)`
  grid-area: content;
  position: sticky;
  top: 0;
  padding: 0 1vw 0 1vw;

  @media (max-width: 1023px) {
    position: relative;
    left: 50%;
    width: fit-content;
    transform: translateX(-50%);
  }
`;

export const FlipText = styled.div`
  grid-area: flip-text;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1023px) {
    position: relative;
    left: 50%;
    width: fit-content;
    padding: 20% 0;
    transform: translateX(-50%);
  }
`;

export const Footer = styled.div`
  grid-area: footer;
  margin-top: 20vh;
`;
