/** @jsxImportSource @emotion/react */
import { ProjectData } from '@types';
import React from 'react';
import styles from './ProjectSummary.e';

interface Props {
  data: ProjectData;
}

const ProjectSummary: React.FC<Props> = ({ data }) => {
  return (
    <section css={styles.container} key={`${data.seq}_${data.partner}_${data.name}`}>
      <div css={styles.headline}>
        <div css={styles.headlineLeft}>
          <p css={styles.projectName}>{data.name}</p>
          <p css={styles.partner}>{data.partner}</p>
        </div>
        <div css={styles.headlineRight}>
          <p css={styles.period}>{`${data.period.start} ~ ${data.period.end}`}</p>
        </div>
      </div>
      <div css={styles.techStackContainer}>
        {Object.keys(data.techStack).map((position) => (
          <React.Fragment key={position}>
            {data.techStack[position]?.map((tech) => (
              <p key={tech} css={styles.techStackItem}>
                {tech}
              </p>
            ))}
          </React.Fragment>
        ))}
      </div>
      {!!data.roles.length && (
        <div css={styles.roleContainer}>
          <p>역할</p>
          <ul>
            {data.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
      )}
      {!!data.achievements.length && (
        <div css={styles.roleContainer}>
          <p>성과</p>
          <ul>
            {data.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      {data.comment && <p>{data.comment}</p>}
    </section>
  );
};

export default ProjectSummary;
