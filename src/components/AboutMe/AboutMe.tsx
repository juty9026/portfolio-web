/** @jsxImportSource @emotion/react */
import React from 'react';
import * as style from './AboutMe.emotion';
import { AboutMe as AboutMeData } from '@types';

type AboutMeProps = {
  data: AboutMeData[];
};

const AboutMe: React.FC<AboutMeProps> = ({ data }) => {
  return (
    <div>
      {data.map((d) => (
        <div css={style.container} key={d.subject}>
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
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
