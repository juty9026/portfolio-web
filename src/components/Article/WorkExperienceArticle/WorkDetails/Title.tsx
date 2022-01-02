/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const styles = {
  titleContainer: css`
    height: 60vh;
    display: flex;
    margin-bottom: 5vh;
  `,
  title: css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12rem;
    letter-spacing: 1rem;
    color: white;
  `,
};

const Title: React.FC = ({ children }) => {
  return (
    <div css={styles.titleContainer}>
      <h3 css={styles.title}>{children}</h3>
    </div>
  );
};

export default Title;
