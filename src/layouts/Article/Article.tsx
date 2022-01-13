import React from 'react';
import { StyledArticle } from './styles';
import HeaderTitle from './HeaderTitle';

interface ArticleProps {
  title?: string;
}
const Article: React.FC<ArticleProps> = ({ title, children }) => {
  return (
    <StyledArticle>
      {!!title && <HeaderTitle>{title}</HeaderTitle>}
      {children}
    </StyledArticle>
  );
};

export default Article;
