/** @jsxImportSource @emotion/react */
import React from 'react';
import * as style from './Article.e';
import StickyHeader from '@components/StickyHeader';

type SectionProps = {
  title: string;
  fullHeight?: boolean;
};

const Article: React.FC<SectionProps> = ({ title, fullHeight = false, children }) => {
  const id = React.useMemo(() => {
    return title.toLowerCase().replace(/ /g, '-');
  }, [title]);

  const containerStyle = React.useMemo(() => {
    return fullHeight ? [style.container, style.fullHeight] : style.container;
  }, [fullHeight]);

  return (
    <article id={id} css={containerStyle}>
      <StickyHeader>
        <h1>{title}</h1>
      </StickyHeader>
      {children}
    </article>
  );
};

export default Article;
