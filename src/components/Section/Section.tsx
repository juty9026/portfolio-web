/** @jsxImportSource @emotion/react */
import React from 'react';
// import { SectionData } from '@types';
import { container } from './Section.emotion';
import Divider from '@components/Divider';

type SectionProps = {
  title: string;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div css={container}>
      <h1>{title}</h1>
      <Divider />
      {children}
    </div>
  );
};

export default Section;
