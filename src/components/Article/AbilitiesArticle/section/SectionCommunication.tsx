import React, { useState } from 'react';
import { Section, Spacer } from '@components/Article/AbilitiesArticle/styled';
import { FadeSimple } from '@components/Animated';
import styled from '@emotion/styled';
import { Waypoint } from 'react-waypoint';
import { a, useSpring } from 'react-spring';
import conversationImage from '@images/conversation.png';
import StickyBox from 'react-sticky-box';
import { css } from '@emotion/react';

const GridContainer = styled(a.div)`
  display: grid;
  grid-template-areas:
    'content1      headline1'
    'headline2     content2'
    'bottom-spacer bottom-spacer';
  place-items: center;
  justify-content: center;
`;

const cssBaseGridItem = css`
  min-height: 100vh;
  padding: 0 5vw 0 5vw;
  display: flex;
  place-items: center;
`;

const Headline1 = styled.div`
  ${cssBaseGridItem};
  grid-area: headline1;
`;

const Headline2 = styled.div`
  ${cssBaseGridItem};
  grid-area: headline2;
`;

const GridStickyContent = styled(StickyBox)`
  ${cssBaseGridItem};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content2 = styled(StickyBox)`
  ${cssBaseGridItem};
  grid-area: content2;
`;

const GridBottomSpacer = styled(Spacer)`
  grid-area: bottom-spacer;
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
        <h3>협업 커뮤니케이션.</h3>
      </FadeSimple>

      <Spacer height="10vh" />

      <GridContainer>
        {/*<Headline1>*/}
        {/*  <FadeSimple direction="left" bottomOffset="20%">*/}
        {/*    <h4>With 개발직군</h4>*/}
        {/*  </FadeSimple>*/}
        {/*</Headline1>*/}
        <Waypoint
          onEnter={() => setPeopleVisible(true)}
          onLeave={({ currentPosition }) => setPeopleVisible(currentPosition === 'above')}
        />
        <GridStickyContent style={{ gridArea: 'content1' }}>
          <FadeSimple direction="right" bottomOffset="20%">
            <p>
              협업을 위한 소통은 필수. 기술적인 이야기를 좋아합니다. 잡담은 할 줄 모르냐구요? 너무 좋아하죠! 저랑 커피
              한 잔 어때요? ☕️
            </p>
          </FadeSimple>
        </GridStickyContent>
        {/*<Headline2>*/}
        {/*  <FadeSimple direction="right" bottomOffset="20%">*/}
        {/*    <h4>With 비개발직군</h4>*/}
        {/*  </FadeSimple>*/}
        {/*</Headline2>*/}
        <GridStickyContent style={{ gridArea: 'content2' }}>
          <FadeSimple direction="left" bottomOffset="20%">
            <p>
              개발직군과 비개발직군이 사용하는 용어가 다름을 잘 알고, 이해하기 쉽게 설명할 수 있습니다.
              {/*<br />*/}
              {/*아, 생각난 김에 이 내용도 써두겠습니다. 기술적으로 어려운 요구사항을 받고도 쉬운 척 하지는 않겠지만, 쉬운 걸*/}
              {/*오래걸린다고 말하지도 않을거예요. 좋은 서비스를 제공하고 싶고, 사용자가 느끼기에 좋은 서비스란 UI/UX 비중이*/}
              {/*크다고 생각하기 때문에 기술적으로 어려워도 최선을 다해서 작업할게요.*/}
            </p>
          </FadeSimple>
          <Waypoint
            onEnter={() => setPeopleVisible(true)}
            onLeave={({ currentPosition }) => setPeopleVisible(currentPosition === 'below')}
          />
        </GridStickyContent>
        <GridBottomSpacer height="50vh" />
      </GridContainer>
      <ConversationImageContainer style={{ transform }}>
        <ConversationImage src={conversationImage} alt="conversation" />
      </ConversationImageContainer>
    </Section>
  );
};

export default SectionCommunication;
