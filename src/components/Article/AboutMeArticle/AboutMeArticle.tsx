/** @jsxImportSource @emotion/react */
import React from 'react';
import * as style from './AboutMeArticle.e';
import { AboutMeData } from '@types';
import Article from '../Article';

type Props = {
  data: AboutMeData[];
};

const AboutMeArticle: React.FC<Props> = ({ data }) => {
  return (
    <Article title="About Me">
      {data.map((d) => (
        <section css={style.container} key={d.subject}>
          <div css={style.subjectContainer}>
            <h2>{d.subject}</h2>
          </div>
          <div css={style.itemContainer}>
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
