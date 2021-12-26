import React from 'react';
import styled from '@emotion/styled';

const StyledArticle = styled.article`
  min-height: 100vh;
`;

interface Props {
  title?: string;
}
const Article: React.FC<Props> = ({ title, children }) => {
  return (
    <StyledArticle>
      {!!title && (
        <header>
          <h1>{title}</h1>
        </header>
      )}
      {children}
    </StyledArticle>
  );
};

export default Article;
