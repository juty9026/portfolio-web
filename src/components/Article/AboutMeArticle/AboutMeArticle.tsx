import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PolaroidImage } from '@components/PolaroidImage';
import Minu from '@images/minu-1a-640w.jpeg';
import Nosick from '@images/nosick-1-640w.jpeg';
import Nolza from '@images/nolza-3-640w.jpeg';
import { Waypoint } from 'react-waypoint';
import { a, config, useTrail } from 'react-spring';
import Article from '@components/Article/Article';

const Container = styled.div`
  padding: 5vh 10vw 5vh 10vw;
  display: flex;
  flex-direction: row;
`;

const Section = styled.section`
  flex: 1;
  font-size: 1rem;
`;

const Headline = styled.h1`
  font-size: 2rem;
`;

const Introduce = styled.p`
  font-size: 1rem;
`;

const Trail: React.FC<{ visible: boolean }> = ({ visible, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    x: visible ? 0 : -50,
    y: visible ? 0 : 20,
    opacity: visible ? 1 : 0,
    reverse: !visible,
    config: config.slow,
  });

  return (
    <div>
      {trail.map((style, i) => (
        <a.div style={style}>{items[i]}</a.div>
      ))}
    </div>
  );
};

const AboutMeArticle: React.FC = () => {
  const [photoVisible, setPhotoVisible] = useState(false);
  return (
    <Article title="About">
      <Container>
        <Section>
          <div>
            <Waypoint
              onEnter={() => setPhotoVisible(true)}
              onLeave={({ currentPosition }) => setPhotoVisible(currentPosition === 'above')}
              topOffset="-50%"
              bottomOffset="50%"
            />
            <Trail visible={photoVisible}>
              <PolaroidImage
                src={Nolza}
                alt="Nolza"
                title="Nolza"
                width="240px"
                styleOuter={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(5deg) scale(0.9)' }}
              />
              <PolaroidImage
                src={Nosick}
                alt="Nosick"
                title="Nosick"
                width="240px"
                styleOuter={{
                  position: 'absolute',
                  top: '240px',
                  left: '184px',
                  transform: 'rotate(-10deg) scale(0.9)',
                }}
              />
              <PolaroidImage
                src={Minu}
                alt="Me"
                title="Minu"
                width="240px"
                styleOuter={{ position: 'absolute', top: '160px', right: 0 }}
              />
            </Trail>
          </div>
        </Section>
        <Section>
          {/*<Profile />*/}
          <div style={{ marginTop: '10vh', padding: '5vh 5vw' }}>
            <Headline>
              안녕하세요.
              <br />만 4년차 웹 개발자 정민우입니다.
            </Headline>
            <br />
            <br />
            <Introduce>
              유저 친화적이고 견고한 웹 애플리케이션에 대해 고민하며 최근에는 웹 표준과 접근성에 대해 배우고 있습니다.
              <br />
              <br />
              낯선 환경에 빠르게 적응하고 논리를 바탕으로 새로운 기술을 빠르게 습득합니다.
              <br />
              <br />
              도전하는 것을 좋아하고 그 결과에 상관없이 과정에서 얻는 경험의 가치를 높게 생각합니다.
              <br />
              <br />
              어제보다 성장한 오늘을 살고, 오늘보다 멋진 내일을 꿈꿉니다. 😎
            </Introduce>
          </div>
        </Section>
      </Container>
    </Article>
  );
};

export default AboutMeArticle;
