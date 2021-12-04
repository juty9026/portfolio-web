/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const styles = {
  wrap: css`
    display: flex;
    margin: 5vh 0 5vh 0;
    padding: 5vh 5vw 5vh 5vw;
  `,
  titleContainer: css`
    flex: 1;
  `,
  title: css`
    text-align: center;
    font-size: 1.8rem;
    color: white;
  `,
  contentContainer: css`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  content: css`
    flex: 1;
    text-align: left;
    font-size: 1.2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

interface Props {
  backend?: string[];
  frontend?: string[];
  devops?: string[];
}

const TechStack: React.FC<Props> = ({ backend = [], frontend = [], devops = [] }) => {
  return (
    <div css={styles.wrap}>
      <div css={styles.titleContainer}>
        <span css={styles.title}>Skills</span>
      </div>
      <div css={styles.contentContainer}>
        {!!backend.length && <span css={styles.content}>{backend.join(', ')}</span>}
        {!!frontend.length && <span css={styles.content}>{backend.join(', ')}</span>}
        {!!devops.length && <span css={styles.content}>{backend.join(', ')}</span>}
      </div>
    </div>
  );
};

export default TechStack;
