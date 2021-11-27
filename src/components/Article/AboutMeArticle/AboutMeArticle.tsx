/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './AboutMeArticle.e';
import { AboutMeData } from '@types';
import Article from '../Article';

interface Props {
  data: AboutMeData[];
}

const AboutMeArticle: React.FC<Props> = ({ data }) => {
  return (
    <Article title="About Me">
      {data.map((d) => (
        <section css={styles.container} key={d.subject}>
          <div css={styles.subjectContainer}>
            <h2>{d.subject}</h2>
          </div>
          <div css={styles.itemContainer}>
            {d.items.length && (
              <ul>
                {d.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </Article>
  );
};

export default AboutMeArticle;
