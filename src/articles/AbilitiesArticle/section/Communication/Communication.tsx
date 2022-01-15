import React, { useState } from 'react';
import { Section } from '@/templates/Section';
import { FadeSimple } from '@/components/Animated';
import { Waypoint } from 'react-waypoint';
import { useSpring } from 'react-spring';
import conversationImage from '@/assets/images/conversation.png';
import Spacer from '@/components/Spacer';
import * as S from './styles';

const Communication: React.FC = () => {
  const [peopleVisible, setPeopleVisible] = useState(false);
  const { transform } = useSpring({
    transform: `translate3d(0, ${peopleVisible ? 0 : 20}vh, 0)`,
    config: { duration: 500 },
  });
  return (
    <Section theme="light">
      <FadeSimple direction={'top'} bottomOffset="50%">
        <h3>편안한 커뮤니케이션</h3>
      </FadeSimple>

      <Spacer height="10vh" />

      <Waypoint
        onEnter={({ previousPosition }) => previousPosition === 'below' && setPeopleVisible(true)}
        onLeave={({ currentPosition }) => currentPosition === 'below' && setPeopleVisible(false)}
        bottomOffset="50%"
      />
      <S.GridContainer>
        <S.GridStickyContent style={{ gridArea: 'content1' }}>
          <FadeSimple direction="right" bottomOffset="20%">
            <p>말이 잘 통하는 사람</p>
          </FadeSimple>
          <Spacer height="2vh" />
          <FadeSimple direction="right" bottomOffset="20%">
            <p>함께 이야기하면 즐거운 사람</p>
          </FadeSimple>
          <Spacer height="2vh" />
          <FadeSimple direction="right" bottomOffset="20%">
            <p>적절한 유머감각 겸비</p>
          </FadeSimple>
        </S.GridStickyContent>

        <S.GridStickyContent style={{ gridArea: 'content2' }}>
          <FadeSimple direction="left" bottomOffset="20%">
            <p>
              <em>협업을 위한 소통은 기본.</em>
              <br />
              의견을 <em>적극적</em>으로 <em>공유</em>하고 <em>더 나은 결과</em>를 도출해내며, 서로 경험치를 쌓을 수
              있는 기술적인 이야기를 좋아합니다.
              <br />
              비개발직군과 <em>원활한 소통</em>이 가능합니다.
            </p>
          </FadeSimple>
        </S.GridStickyContent>
        <S.GridBottomSpacer height="50vh" />
      </S.GridContainer>
      <Waypoint
        onEnter={({ previousPosition }) => previousPosition === 'above' && setPeopleVisible(true)}
        onLeave={({ currentPosition }) => currentPosition === 'above' && setPeopleVisible(false)}
        topOffset="80%"
      />

      <S.ConversationImageContainer style={{ transform }}>
        <S.ConversationImage src={conversationImage} alt="conversation" />
      </S.ConversationImageContainer>
    </Section>
  );
};

export default Communication;
