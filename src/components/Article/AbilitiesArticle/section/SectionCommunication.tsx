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
    'content1      .            '
    '.             content2     '
    'bottom-spacer bottom-spacer';
  grid-template-columns: 1fr 1fr;
  place-items: center;
  justify-content: center;
`;

const cssBaseGridItem = css`
  min-height: 100vh;
  padding: 0 5vw 0 5vw;
  display: flex;
  place-items: center;
`;

const GridStickyContent = styled(StickyBox)`
  ${cssBaseGridItem};
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
        <h3>편안한 커뮤니케이션.</h3>
      </FadeSimple>

      <Spacer height="10vh" />

      <GridContainer>
        <Waypoint
          onEnter={() => setPeopleVisible(true)}
          onLeave={({ currentPosition }) => setPeopleVisible(currentPosition === 'above')}
        />

        <GridStickyContent style={{ gridArea: 'content1' }}>
          <FadeSimple direction="right" bottomOffset="20%">
            <p>말이 잘 통하는 사람.</p>
          </FadeSimple>
          <Spacer height="2vh" />
          <FadeSimple direction="right" bottomOffset="20%">
            <p>함께 이야기하면 즐거운 사람.</p>
          </FadeSimple>
          <Spacer height="2vh" />
          <FadeSimple direction="right" bottomOffset="20%">
            <p>적절한 유머감각 겸비.</p>
          </FadeSimple>
        </GridStickyContent>

        <GridStickyContent style={{ gridArea: 'content2' }}>
          <FadeSimple direction="left" bottomOffset="20%">
            <p>
              <em>협업을 위한 소통은 기본.</em>
              <br />
              기술적인 이야기를 좋아합니다.
              <br />
              비개발직군과 <em>원활한 소통</em>이 가능합니다.
            </p>
          </FadeSimple>

          <Waypoint
            onEnter={() => setPeopleVisible(true)}
            onLeave={({ currentPosition }) => setPeopleVisible(currentPosition === 'below')}
            topOffset="50%"
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
