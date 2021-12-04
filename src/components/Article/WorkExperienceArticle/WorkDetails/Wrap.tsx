/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const styles = {
  wrap: css`
    padding: 0 0 10vh 0;
  `,
};

const Wrap: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

export default Wrap;
