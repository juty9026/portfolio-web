import React from 'react';
import { SectionCleanCode, SectionCommunication, SectionProblemSolver, SectionWorkEfficiency } from './section';

const AbilitiesArticle: React.FC = () => {
  return (
    <article>
      <SectionCommunication />
      <SectionProblemSolver />
      <SectionCleanCode />
      <SectionWorkEfficiency />
    </article>
  );
};

export default AbilitiesArticle;
