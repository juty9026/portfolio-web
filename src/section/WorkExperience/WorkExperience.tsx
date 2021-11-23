/** @jsxImportSource @emotion/react */
import React from 'react';
// import * as style from './WorkExperience.e';
// import { AboutMe as AboutMeData } from '@types';
import { WorkExperienceData } from '@types';

interface WorkExperienceProps {
  data: WorkExperienceData;
}

const WorkExperience = ({ data }: WorkExperienceProps) => {
  React.useEffect(() => {
    console.table(data);
  }, [data]);
  return (
    <>
      {/* {data.map((d) => (
        <section css={style.container} key={d.subject}></section>
      ))} */}
    </>
  );
};

export default WorkExperience;
