import React, { useRef, useState } from 'react';
import { PolaroidImage } from '@components/PolaroidImage';
import Minu from '@images/minu-1a-640w.jpeg';
import Nosick from '@images/nosick-1-640w.jpeg';
import Nolza from '@images/nolza-3-640w.jpeg';
import { Waypoint } from 'react-waypoint';
import { a, config, useTrail } from 'react-spring';
import Article from '@layouts/Article';
import { DevIcon } from '@components/DevIcon';
import MessageHub, { AddFunction } from '@components/MessageHub/MessageHub';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Container,
  ContactContainer,
  IconContainer,
  EmailContainer,
  Email,
  SectionIntroduction,
  Introduce,
  SectionPhoto,
  Headline,
} from './styles';

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
  const ref = useRef<null | AddFunction>(null);
  const [photoVisible, setPhotoVisible] = useState(false);
  return (
    <Article title="About">
      <Container>
        <SectionIntroduction>
          <div>
            <Headline>
              안녕하세요. 👋
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
              🤗 누구와도 쉽게 친해지고 사람을 재미있게, 편안하게 하는 매력이 있습니다.
              <br />
              🧐 낯선 환경에 빠르게 적응하고 논리를 바탕으로 새로운 기술을 빠르게 습득합니다.
              <br />
              👍 도전하는 것을 좋아하고 그 결과에 상관없이 과정에서 얻는 경험의 가치를 높게 생각합니다.
              <br />
              <br />
              어제보다 성장한 오늘을 살고, 오늘보다 멋진 내일을 꿈꿉니다. 😎
            </Introduce>

            <ContactContainer>
              <EmailContainer>
                <CopyToClipboard text="juty9026@gmail.com" onCopy={() => ref.current?.('복사되었습니다!')}>
                  <Email>juty9026@gmail.com</Email>
                </CopyToClipboard>
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
        <MessageHub
          timeout={3000}
          children={(add: AddFunction) => {
            ref.current = add;
          }}
        />
      </Container>
    </Article>
  );
};

export default AboutMeArticle;
