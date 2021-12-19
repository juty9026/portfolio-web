import React, { useState } from 'react';
import { Section, Spacer } from '@components/Article/AbilitiesArticle/styled';
import { FadeSimple } from '@components/Animated';
import styled from '@emotion/styled';
import { Waypoint } from 'react-waypoint';
import { a, useSpring } from 'react-spring';
import conversationImage from '@images/conversation.png';

const GridContainer = styled(a.div)`
  min-height: 200vh;
  display: grid;
  grid-template-areas:
    'content1 headline1'
    'headline2 content2';
  place-items: center;
`;

const BaseGridItem = styled.div`
  height: 100vh;
  padding: 0 5vw 0 5vw;
  display: flex;
  place-items: center;
`;

const Headline1 = styled(BaseGridItem)`
  grid-area: headline1;
`;

const Headline2 = styled(BaseGridItem)`
  grid-area: headline2;
`;

const Content1 = styled(BaseGridItem)`
  grid-area: content1;
`;

const Content2 = styled(BaseGridItem)`
  grid-area: content2;
`;

const ConversationImageContainer = styled(a.div)`
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 20vh;
  display: flex;
  place-items: center;
  position: fixed;
  flex-direction: column;
`;

const ConversationImage = styled.img`
  max-height: 20vh;
`;

const SectionCommunication: React.FC = () => {
  const [peopleVisible, setPeopleVisible] = useState(false);
  const { transform } = useSpring({
    transform: `translate3d(0, ${peopleVisible ? 0 : 20}vh, 0)`,
    config: { duration: 500 },
  });
  return (
    <Section theme="light">
      <FadeSimple direction={'top'} bottomOffset="50%">
        <h3>불편함 없는 커뮤니케이션.</h3>
      </FadeSimple>

      <Spacer height="10vh" />

      <GridContainer>
        <Headline1>
          <FadeSimple direction="right" bottomOffset="20%">
            <h4>With 개발직군</h4>
          </FadeSimple>
        </Headline1>
        <Content1>
          <Waypoint
            onEnter={() => setPeopleVisible(true)}
            onLeave={({ currentPosition }) => {
              setPeopleVisible(currentPosition === 'above');
            }}
          />
          <FadeSimple direction="right" bottomOffset="20%">
            <p>
              협업을 위한 소통은 필수. 기술적인 이야기를 좋아합니다. 잡담은 할 줄 모르냐구요? 너무 좋아하죠! 저랑 커피
              한 잔 어때요? ☕️
            </p>
          </FadeSimple>
        </Content1>
        <Headline2>
          <FadeSimple direction="left" bottomOffset="20%">
            <h4>With 비개발직군</h4>
          </FadeSimple>
        </Headline2>
        <Content2>
          <FadeSimple direction="left" bottomOffset="20%">
            <p>
              개발직군과 비개발직군이 사용하는 용어가 다름을 잘 알고 있어요. 만약 불협화음을 내는 것이 목적이라면 내가
              알고 있는 걸 당연히 상대방도 알고 있을거라는 전제를 깔면 돼요.
              {/*<br />*/}
              {/*아, 생각난 김에 이 내용도 써두겠습니다. 기술적으로 어려운 요구사항을 받고도 쉬운 척 하지는 않겠지만, 쉬운 걸*/}
              {/*오래걸린다고 말하지도 않을거예요. 좋은 서비스를 제공하고 싶고, 사용자가 느끼기에 좋은 서비스란 UI/UX 비중이*/}
              {/*크다고 생각하기 때문에 기술적으로 어려워도 최선을 다해서 작업할게요.*/}
            </p>
          </FadeSimple>
          <Waypoint
            onEnter={() => setPeopleVisible(true)}
            onLeave={({ currentPosition }) => {
              setPeopleVisible(currentPosition === 'below');
            }}
          />
        </Content2>
      </GridContainer>
      <ConversationImageContainer style={{ transform }}>
        <ConversationImage src={conversationImage} alt="conversation" />
      </ConversationImageContainer>
    </Section>
  );
};

export default SectionCommunication;
