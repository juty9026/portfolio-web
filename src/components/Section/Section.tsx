/** @jsxImportSource @emotion/react */
import React from 'react';
import { container } from './Section.emotion';
import StickyHeader from '@components/StickyHeader';

type SectionProps = {
  title: string;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
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
