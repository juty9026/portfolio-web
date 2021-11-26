/** @jsxImportSource @emotion/react */
import React from 'react';
import { WorkExperienceData } from '@types';
import ProjectSummary from './ProjectSummary';

interface WorkExperienceProps {
  data: WorkExperienceData;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
  return (
    <>
      {data.projects.map((project) => (
        <ProjectSummary data={project} />
      ))}
    </>
  );
};

export default WorkExperience;
