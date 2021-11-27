/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './TechExpbar.e';

interface Props {
  title: string;
  exp: number;
  color: string;
}

const TechExpBar: React.FC<Props> = ({ title, exp, color }) => {
  return (
    <div css={styles.wrapper}>
      <span css={styles.title}>{title}</span>
      <div css={styles.expBar}>
        <div css={styles.exp} style={{ width: `${exp}%`, backgroundColor: color }} />
      </div>
    </div>
  );
};

export default TechExpBar;
