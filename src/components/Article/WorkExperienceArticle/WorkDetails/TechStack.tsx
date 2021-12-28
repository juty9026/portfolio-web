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
    display: flex;
  `,
  title: css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    color: black;
  `,
  contentContainer: css`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  content: css`
    flex: 1;
    text-align: left;
    font-size: 1.5rem;
    color: black;
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
        {!!frontend.length && <span css={styles.content}>{frontend.join(', ')}</span>}
        {!!devops.length && <span css={styles.content}>{devops.join(', ')}</span>}
      </div>
    </div>
  );
};

export default TechStack;
