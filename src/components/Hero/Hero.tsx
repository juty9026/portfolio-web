/** @jsxImportSource @emotion/react */
import { useScroll } from '@hooks';
import React from 'react';
import styles from './Hero.e';

interface Props {}

const Hero: React.FC<Props> = () => {
  const { scrollY } = useScroll();

  return (
    <div css={styles.wrapper} style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
      <div css={styles.container} style={{ transform: `translateY(${scrollY * -0.42}px)` }}>
        <div css={styles.helloContainer}>
          <h5 css={styles.hello}>Hi there👋, I'm</h5>
        </div>
        <div css={styles.nameContainer}>
          <h3 css={styles.name}>정민우</h3>
        </div>
        <div css={styles.positionContainer}>
          <h4 css={styles.position}>Web developer</h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
