/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const styles = {
  content: css`
    padding: 0 10vw 10vh 10vw;
  `,
};

const Content: React.FC = ({ children }) => {
  return <div css={styles.content}>{children}</div>;
};

export default Content;
