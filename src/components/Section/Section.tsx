/** @jsxImportSource @emotion/react */
import React from 'react';
import * as style from './Section.emotion';
import StickyHeader from '@components/StickyHeader';

type SectionProps = {
  title: string;
  fullHeight?: boolean;
};

const Section: React.FC<SectionProps> = ({ title, fullHeight = false, children }) => {
  const container = React.useMemo(() => {
    return fullHeight ? [style.container, style.fullHeight] : style.container;
  }, [fullHeight]);

  return (
    <div css={container}>
      <StickyHeader>
        <h1>{title}</h1>
      </StickyHeader>
      {children}
    </div>
  );
};

export default Section;
