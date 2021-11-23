/** @jsxImportSource @emotion/react */
import React from 'react';
import * as style from './WorkExperience.e';
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
      {data.projects.map((p) => (
        <section css={style.container} key={p.name}>
          <header>
            <p css={style.projectName}>{p.name}</p>
          </header>
          <p css={style.partner}>{p.partner}</p>
          <p css={style.period}>{`${p.period.start} ~ ${p.period.end}`}</p>
          <div css={style.techStackContainer}>
            {Object.keys(p.techStack).map((position: string) => (
              <div>
                <p>{position.toUpperCase()}</p>
                {p.techStack[position]?.map((tech) => (
                  <p>{tech}</p>
                ))}
              </div>
            ))}
          </div>
          {!!p.roles.length && (
            <div css={style.roleContainer}>
              {p.roles.map((role) => (
                <p>{role}</p>
              ))}
            </div>
          )}
          {!!p.achievements.length && (
            <div css={style.roleContainer}>
              {p.achievements.map((achievement) => (
                <p>{achievement}</p>
              ))}
            </div>
          )}
          {p.comment && <p>{p.comment}</p>}
        </section>
      ))}
    </>
  );
};

export default WorkExperience;
