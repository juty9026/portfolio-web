/** @jsxImportSource @emotion/react */
import React from 'react';
import Article from '../Article';
import SkillsOverview from './SkilsOverview';
import styles from './SkillsArticle.emotion';

const SkillsArticle: React.FC = () => {
  return (
    <Article title="Skills & Expereince">
      <div style={{ backgroundColor: 'transparent' }}>
        <div css={styles.wrapper}>
          <section css={styles.flexContainer}>
            <div css={styles.contentContainer}>
              <p css={styles.content}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum."
              </p>
            </div>
          </section>
          <section css={styles.flexContainer}>
            <SkillsOverview />
          </section>
        </div>
      </div>
    </Article>
  );
};

export default SkillsArticle;
