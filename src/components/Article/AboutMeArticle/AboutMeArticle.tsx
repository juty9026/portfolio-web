import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PolaroidImage } from '@components/PolaroidImage';
import Minu from '@images/minu-1a-640w.jpeg';
import Nosick from '@images/nosick-1-640w.jpeg';
import Nolza from '@images/nolza-3-640w.jpeg';
import { Waypoint } from 'react-waypoint';
import { a, config, useTrail } from 'react-spring';
import Article from '@components/Article/Article';
import { DevIcon } from '@components/DevIcon';

const Container = styled.div`
  margin: auto;
  min-height: 100vh;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const SectionPhoto = styled.section`
  @media (min-width: 1024px) {
    flex: 1 0 60%;
  }
`;

const SectionIntroduction = styled.section`
  @media (min-width: 1024px) {
    flex: 0 0 40%;
    font-size: 1rem;
  }
`;

const Headline = styled.h1`
  font-size: 2rem;
  text-align: left;

  @media (max-width: 1023px) {
    font-size: 1.5rem;
  }
`;

const Introduce = styled.p`
  font-size: 1rem;
`;

const ContactContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EmailContainer = styled.div`
  flex: 1;
`;

const Email = styled.p`
  top: 50%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: normal;
  transform: translateY(-50%);
`;

const IconContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 2rem;
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
    <div style={{ width: '100%', height: '100%', display: 'flex' }}>
      {trail.map((style, i) => (
        <a.div key={i} style={{ ...style, height: '100%' }}>
          {items[i]}
        </a.div>
      ))}
    </div>
  );
};

const AboutMeArticle: React.FC = () => {
  const [photoVisible, setPhotoVisible] = useState(false);
  return (
    <Article title="About">
      <Container>
        <SectionPhoto>
          <div style={{ width: '100%', height: '100%' }}>
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
                styleOuter={{ flex: 1, transform: 'rotate(5deg) scale(0.85)' }}
              />
              <PolaroidImage src={Minu} alt="Me" title="Minu" styleOuter={{ flex: 1, transform: 'rotate(-5deg)' }} />
              <PolaroidImage
                src={Nosick}
                alt="Nosick"
                title="Nosick"
                styleOuter={{
                  flex: 1,
                  transform: 'rotate(1deg) scale(0.9)',
                }}
              />
            </Trail>
          </div>
        </SectionPhoto>
        <SectionIntroduction>
          <div>
            <Headline>
              안녕하세요.
              <br />웹 개발자 정민우입니다.
            </Headline>

            <br />
            <br />

            <Introduce>
              4년의 개발 경력을 가지고있고 주로 프론트엔드 개발 및 백엔드 개발을 하였습니다.
              <br />
              총 4명으로 구성된 프론트엔드 팀을 리드하여 프로젝트를 성공적으로 배포한 경험이 있으며 모두가 성장할 수
              있고, 더 나은 결과물을 낼 수 있도록 개발 문화를 개선하려고 노력해왔습니다.
              <br />
              <br />
              유저 친화적인 UI/UX에 관심이 있으며 확장 가능한, 견고한 웹 애플리케이션에 대해 고민하고 웹 표준과 접근성을
              지키기 위해 노력합니다.
              <br />
              <br />
              낯선 환경에 빠르게 적응하고 논리를 바탕으로 새로운 기술을 빠르게 습득합니다.
              <br />
              도전하는 것을 좋아하고 그 결과에 상관없이 과정에서 얻는 경험의 가치를 높게 생각합니다.
              <br />
              <br />
              어제보다 성장한 오늘을 살고, 오늘보다 멋진 내일을 꿈꿉니다. 😎
            </Introduce>

            <ContactContainer>
              <EmailContainer>
                <Email>juty9026@gmail.com</Email>
              </EmailContainer>
              <IconContainer>
                <a href="https://github.com/juty9026" target="_blank">
                  <DevIcon name="GitHub" size={40} />
                </a>
                <a href="https://www.linkedin.com/in/정민우" target="_blank">
                  <DevIcon name="LinkedIn" size={40} />
                </a>
              </IconContainer>
            </ContactContainer>
          </div>
        </SectionIntroduction>
      </Container>
    </Article>
  );
};

export default AboutMeArticle;
