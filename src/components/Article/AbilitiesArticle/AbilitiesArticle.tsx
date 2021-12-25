import React from 'react';
import {
  SectionCleanCode,
  SectionCommunication,
  SectionProblemSolver,
  SectionWorkEfficiency,
} from '@components/Article/AbilitiesArticle/section';

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
