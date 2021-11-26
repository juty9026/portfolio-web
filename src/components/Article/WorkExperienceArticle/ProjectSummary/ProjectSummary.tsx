/** @jsxImportSource @emotion/react */
import { ProjectData } from '@types';
import React from 'react';
import * as style from './ProjectSummary.e';

type Props = {
  data: ProjectData;
};

const ProjectSummary: React.FC<Props> = ({ data }) => {
  return (
    <section css={style.container} key={`${data.seq}_${data.partner}_${data.name}`}>
      <div css={style.headline}>
        <div css={style.headlineLeft}>
          <p css={style.projectName}>{data.name}</p>
          <p css={style.partner}>{data.partner}</p>
        </div>
        <div css={style.headlineRight}>
          <p css={style.period}>{`${data.period.start} ~ ${data.period.end}`}</p>
        </div>
      </div>
      <div css={style.techStackContainer}>
        {Object.keys(data.techStack).map((position: string) => (
          <>
            {data.techStack[position]?.map((tech) => (
              <p key={tech} css={style.techStackItem}>
                {tech}
              </p>
            ))}
          </>
        ))}
      </div>
      {!!data.roles.length && (
        <div css={style.roleContainer}>
          <p>역할</p>
          <ul>
            {data.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
      )}
      {!!data.achievements.length && (
        <div css={style.roleContainer}>
          <p>성과</p>
          <ul>
            {data.achievements.map((achievement) => (
              <li>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      {data.comment && <p>{data.comment}</p>}
    </section>
  );
};

export default ProjectSummary;
