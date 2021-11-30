/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './Profile.e';

const Profile: React.FC = () => {
  return (
    <div css={styles.card}>
      <div css={styles.cardRow}>
        <h4 css={styles.cardRowTitle}>Name</h4>
        <span css={styles.cardRowContent}>정민우</span>
      </div>
      <div css={styles.cardRow}>
        <h4 css={styles.cardRowTitle}>Job</h4>
        <span css={styles.cardRowContent}>Web Developer</span>
      </div>
      <div css={styles.cardRow}>
        <h4 css={styles.cardRowTitle}>Email</h4>
        <span css={styles.cardRowContent}>juty9026@gmail.com</span>
      </div>
    </div>
  );
};

export default Profile;
