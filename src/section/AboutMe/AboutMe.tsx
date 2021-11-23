/** @jsxImportSource @emotion/react */
import React from 'react';
import * as style from './AboutMe.e';
import { AboutMeData } from '@types';

type AboutMeProps = {
  data: AboutMeData[];
};

const AboutMe: React.FC<AboutMeProps> = ({ data }) => {
  return (
    <>
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
    </>
  );
};

export default AboutMe;
