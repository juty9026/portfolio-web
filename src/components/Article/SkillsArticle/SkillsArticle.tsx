/** @jsxImportSource @emotion/react */
import React from 'react';
import Article from '../Article';
import SkillsOverview from './SkilsOverview';

const SkillsArticle: React.FC = () => {
  return (
    <Article title="Skills">
      <SkillsOverview />
    </Article>
  );
};

export default SkillsArticle;
