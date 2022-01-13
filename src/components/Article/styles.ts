import styled from '@emotion/styled';

export const StyledArticle = styled.article`
  padding-top: 10vh;
  min-height: 100vh;
`;

export const StyledHeader = styled.header`
  background: white;
  display: flex;
  color: black;

  &:before,
  &:after {
    content: '';
    margin: auto 1em;
    border-bottom: solid 1px;
    flex: 1;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  padding: 0.25em 2em;
  overflow: hidden;
  background: linear-gradient(currentcolor, currentcolor) no-repeat top center,
    linear-gradient(currentcolor, currentcolor) no-repeat bottom center;
  background-size: calc(100% - 1.7em) 1px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: solid 1px;
    border-top: none;
    border-bottom: none;
  }

  &:before {
    transform: skew(45deg);
  }

  &:after {
    transform: skew(-45deg);
  }

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;
