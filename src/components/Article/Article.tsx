/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './Article.e';
import StickyHeader from '@components/StickyHeader';

interface Props {
  title: string;
  fullHeight?: boolean;
}

const Article: React.FC<Props> = ({ title, fullHeight = false, children }) => {
  const id = React.useMemo(() => {
    return title.toLowerCase().replace(/ /g, '-');
  }, [title]);

  const containerStyle = React.useMemo(() => {
    return fullHeight ? [styles.container, styles.fullHeight] : styles.container;
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
