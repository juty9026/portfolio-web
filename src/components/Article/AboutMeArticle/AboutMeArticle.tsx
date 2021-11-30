/** @jsxImportSource @emotion/react */
import React from 'react';
import { AboutMeData } from '@types';
import Article from '../Article';
import styles from './AboutMeArticle.e';
import Profile from '@components/Profile';

interface Props {
  data: AboutMeData[];
}

const AboutMeArticle: React.FC<Props> = ({}) => {
  return (
    <Article title="About Me">
      <div css={styles.container}>
        <section css={styles.section}>
          <Profile />
        </section>
        <section css={styles.section}>
          <p>안녕하세요. 만 4년차 웹 개발자 정민우입니다.</p>
          <p>어제보다 성장한 오늘을 살고, 오늘보다 멋진 내일을 꿈꿉니다. 😎</p>
          <br />
          <p>
            웹 페이지 제작과 관련된 기술 대부분에 흥미가 있으며 계속해서 배우고, 도전하는 것을 좋아하여 빠르게 변화하는
            트렌드에 금방 적응합니다.
          </p>
        </section>
      </div>
    </Article>
  );
};

export default AboutMeArticle;
