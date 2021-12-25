/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FadeSimple, IAmPossible, NoProblem } from '@components/Animated';
import { Waypoint } from 'react-waypoint';
import StickyBox from 'react-sticky-box';
import { Section, Spacer } from '@components/Article/AbilitiesArticle/styled';
import checkMark from '@images/check-mark-240.png';
import externalLink from '@images/external-link-128.png';

const GridContainer = styled.div`
  display: grid;
  min-height: 200vh;
  grid-template-areas:
    '.          flip-text '
    'content    .         '
    'footer     footer    ';
  grid-template-columns: repeat(2, 1fr);
`;

const BaseGridItem = styled.div`
  height: 100vh;
  padding: 0 5vw 0 5vw;
  display: flex;
  flex-direction: column;
  place-content: center;
`;

const TextWithCheckMark = styled.p`
  &:before {
    content: '';
    background-image: url(${checkMark});
    background-size: 100% 100%;
    width: 0.8em;
    height: 0.8em;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.3em;
  }
`;

const Anchor = styled.a`
  &:after {
    content: '';
    background-image: url(${externalLink});
    background-size: 100% 100%;
    width: 0.8em;
    height: 0.8em;
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.3em;
  }
`;

const Content = styled(BaseGridItem)`
  grid-area: content;
  padding: 0 1vw 0 1vw;
  position: sticky;
  top: 0;
`;

const FlipText = styled(StickyBox)`
  grid-area: flip-text;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = styled.div`
  grid-area: footer;
  margin-top: 20vh;
`;

const SectionProblemSolver: React.FC = () => {
  const [changeWord, setChangeWord] = useState(false);
  return (
    <Section theme="dark">
      <FadeSimple direction={'top'} bottomOffset="50%">
        <h3>문제 해결사.</h3>
      </FadeSimple>

      <Spacer height="20vh" />

      <GridContainer>
        <Content>
          <Waypoint
            onEnter={({ previousPosition }) => {
              setChangeWord(previousPosition === 'below');
            }}
            onLeave={({ currentPosition }) => {
              setChangeWord(currentPosition === 'above');
            }}
            topOffset="45%"
          />
          <FadeSimple direction="right" block>
            <p style={{ marginLeft: '1.1em' }}>
              문제를 정확하게 <em>인지</em>하고 <em>해결</em>할 수 있습니다.
            </p>
          </FadeSimple>

          <Spacer height="10vh" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
            <FadeSimple direction="right" block>
              <TextWithCheckMark>
                <em>경험</em>과 <em>논리</em>에 기반하거나 혹은 <em>감각</em>적으로 원인 파악
              </TextWithCheckMark>
            </FadeSimple>
            <FadeSimple direction="right" block>
              <TextWithCheckMark>
                <em>창의력</em>과 <em>커뮤니케이션</em> 능력을 이용해 대안 탐구
              </TextWithCheckMark>
            </FadeSimple>
            <FadeSimple direction="right" block>
              <TextWithCheckMark>
                또 다른 문제를 만들지 않도록 <em>꼼꼼</em>하게 솔루션 구현
              </TextWithCheckMark>
            </FadeSimple>
            <FadeSimple direction="right" block>
              <TextWithCheckMark>
                문제 인식부터 성과 측정까지 지치지 않는 <em>집요함</em>
              </TextWithCheckMark>
            </FadeSimple>
          </div>
        </Content>

        <FlipText>
          <FadeSimple direction="left" style={{ marginLeft: '5vw', display: 'block', textAlign: 'left' }}>
            <NoProblem change={changeWord} />
          </FadeSimple>
          <FadeSimple direction="left" style={{ marginLeft: '5vw', display: 'block', textAlign: 'left' }}>
            <IAmPossible change={changeWord} />
          </FadeSimple>
        </FlipText>

        <Footer>
          <Anchor
            href="https://www.linkedin.com/pulse/10-reasons-why-you-should-hire-problem-solver-amanda-condon"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <em>10 Reasons Why You Should Hire "The Problem Solver" - Amanda Shavers</em>
          </Anchor>
        </Footer>
      </GridContainer>
    </Section>
  );
};

export default SectionProblemSolver;
