/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FadeSimple, IAmPossible, NoProblem } from '@components/Animated';
import { Waypoint } from 'react-waypoint';
import StickyBox from 'react-sticky-box';
import { Section, Spacer } from '@components/Article/AbilitiesArticle/styled';

const GridContainer = styled.div`
  display: grid;
  min-height: 200vh;
  grid-template-areas:
    'content1 flip-text'
    'content2     .   ';
  grid-template-columns: repeat(2, 1fr);
`;

const BaseGridItem = styled.div`
  height: 100vh;
  padding: 0 5vw 0 5vw;
  display: flex;
  place-items: center;
`;

const Content1 = styled(BaseGridItem)`
  grid-area: content1;
`;

const Content2 = styled(BaseGridItem)`
  grid-area: content2;
`;

const FlipText = styled(StickyBox)`
  grid-area: flip-text;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionProblemSolver: React.FC = () => {
  const [changeWord, setChangeWord] = useState(false);
  return (
    <Section theme="dark">
      <FadeSimple direction={'top'} bottomOffset="50%">
        <h3>자타공인 해결사.</h3>
      </FadeSimple>

      <Spacer height="10vh" />

      <GridContainer>
        <Content1>
          <FadeSimple direction="right">
            <p>
              어디에서 문제가 생길까요? 원인이 발생하는 포인트를 감각적으로 찾아낼 수 있습니다. 확실하게 아닌 부분을
              소거하고, 가능성이 높은 부분부터 확인해보면 답은 금방 나오게 되죠.
            </p>
          </FadeSimple>
        </Content1>
        <Waypoint
          onEnter={({ previousPosition }) => {
            setChangeWord(previousPosition === 'below');
          }}
          onLeave={({ currentPosition }) => {
            setChangeWord(currentPosition === 'above');
          }}
          topOffset="45%"
          bottomOffset="45%"
        />

        <Content2>
          <FadeSimple direction="right">
            <p>
              원인을 찾았으니 해결해봅시다. 잘못 구현되어 원하지 않는 결과가 나온것이라면 로직을 수정하고, 추가적인
              기능이 필요하다면 적절한 위치에 끼워 넣으면 돼요. 하지만, 아무리 급해도 사이드 이펙트가 발생할 수 있는
              부분은 꼼꼼하게 확인해야 합니다!
            </p>
          </FadeSimple>
        </Content2>
        <FlipText>
          <FadeSimple direction="left" style={{ marginLeft: '5vw', display: 'block', textAlign: 'left' }}>
            <NoProblem change={changeWord} />
          </FadeSimple>
          <FadeSimple direction="left" style={{ marginLeft: '5vw', display: 'block', textAlign: 'left' }}>
            <IAmPossible change={changeWord} />
          </FadeSimple>
        </FlipText>
      </GridContainer>
    </Section>
  );
};

export default SectionProblemSolver;
