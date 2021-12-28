/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const styles = {
  titleContainer: css`
    height: 30vh;
    display: flex;
  `,
  title: css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    letter-spacing: 0.1em;
    color: black;
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
