/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const styles = {
  description: css`
    font-size: 2rem;
    color: #8892b0;
    white-space: pre-line;
    letter-spacing: 0.2rem;
  `,
};

const Description: React.FC = ({ children }) => {
  return <pre css={styles.description}>{children}</pre>;
};

export default Description;
