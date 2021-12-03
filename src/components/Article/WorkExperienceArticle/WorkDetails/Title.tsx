/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const styles = {
  title: css`
    font-size: 3rem;
  `,
};

const Title: React.FC = ({ children }) => {
  return <h3 css={styles.title}>{children}</h3>;
};

export default Title;
