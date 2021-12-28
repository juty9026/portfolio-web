import React from 'react';
import styled from '@emotion/styled';

const StyledArticle = styled.article`
  padding: 10vh 0;
  min-height: 100vh;
`;

const StyledHeader = styled.header`
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
const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  padding: 0.25em 1em;
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
`;

const HeaderTitle: React.FC = ({ children }) => {
  return (
    <StyledHeader>
      <StyledH1>{children}</StyledH1>
    </StyledHeader>
  );
};

interface Props {
  title?: string;
}
const Article: React.FC<Props> = ({ title, children }) => {
  return (
    <StyledArticle>
      {!!title && <HeaderTitle>{title}</HeaderTitle>}
      {children}
    </StyledArticle>
  );
};

export default Article;
