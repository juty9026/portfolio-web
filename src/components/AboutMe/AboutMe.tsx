/** @jsxImportSource @emotion/react */
import React from 'react';
import { container, subjectContainer, itemContainer } from './AboutMe.emotion';
import { AboutMe as AboutMeData } from '@types';

type AboutMeProps = {
  data: AboutMeData[];
};

const AboutMe: React.FC<AboutMeProps> = ({ data }) => {
  return (
    <div>
      {data.map((d) => (
        <div css={container} key={d.subject}>
          <div css={subjectContainer}>
            <h2>{d.subject}</h2>
          </div>
          <div css={itemContainer}>
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
