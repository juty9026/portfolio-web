import React, { useState } from 'react';
import { FadeSimple, IAmPossible, NoProblem } from '@/components/Animated';
import { Waypoint } from 'react-waypoint';
import { Section } from '@/templates/Section';
import Spacer from '@/components/Spacer';
import * as S from './styles';

const ProblemSolver: React.FC = () => {
  const [changeWord, setChangeWord] = useState(false);
  return (
    <Section theme="dark">
      <FadeSimple direction={'top'} bottomOffset="50%">
        <h3>문제 해결사</h3>
      </FadeSimple>

      <Spacer height="20vh" />

      <S.GridContainer>
        <S.Content>
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
              <S.TextWithCheckMark>
                <em>경험</em>과 <em>논리</em>에 기반하거나 혹은 <em>감각</em>적으로 원인 파악
              </S.TextWithCheckMark>
            </FadeSimple>
            <FadeSimple direction="right" block>
              <S.TextWithCheckMark>
                <em>창의력</em>과 <em>커뮤니케이션</em> 능력을 이용해 대안 탐구
              </S.TextWithCheckMark>
            </FadeSimple>
            <FadeSimple direction="right" block>
              <S.TextWithCheckMark>
                또 다른 문제를 만들지 않도록 <em>꼼꼼</em>하게 솔루션 구현
              </S.TextWithCheckMark>
            </FadeSimple>
            <FadeSimple direction="right" block>
              <S.TextWithCheckMark>
                문제 인식부터 성과 측정까지 포기하지 않는 <em>집요함</em>
              </S.TextWithCheckMark>
            </FadeSimple>
          </div>
        </S.Content>

        <S.FlipText>
          <FadeSimple direction="left" style={{ marginLeft: '5vw', display: 'block', textAlign: 'left' }}>
            <NoProblem change={changeWord} />
          </FadeSimple>
          <FadeSimple direction="left" style={{ marginLeft: '5vw', display: 'block', textAlign: 'left' }}>
            <IAmPossible change={changeWord} />
          </FadeSimple>
        </S.FlipText>

        <S.Footer>
          <S.Anchor
            href="https://www.linkedin.com/pulse/10-reasons-why-you-should-hire-problem-solver-amanda-condon"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <em>10 Reasons Why You Should Hire "The Problem Solver" - Amanda Shavers</em>
          </S.Anchor>
        </S.Footer>
      </S.GridContainer>
    </Section>
  );
};

export default ProblemSolver;
