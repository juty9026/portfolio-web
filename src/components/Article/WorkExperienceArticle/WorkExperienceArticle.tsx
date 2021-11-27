/** @jsxImportSource @emotion/react */
import React from 'react';
import { WorkExperienceData } from '@types';
import Article from '../Article';
import ProjectSummary from './ProjectSummary';

interface Props {
  data: WorkExperienceData;
}

const WorkExperience: React.FC<Props> = ({ data }) => {
  return (
    <Article title="Work Expereicne">
      {data.projects.map((project) => (
        <ProjectSummary data={project} />
      ))}
    </Article>
  );
};

export default WorkExperience;