import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FadeSimple, IAmPossible, NoProblem } from '@components/Animated';
import { Waypoint } from 'react-waypoint';
import { Section, Spacer } from '../styled';
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
  grid-template-rows: 100vh 100vh;

  @media (max-width: 1023px) {
    min-height: 100vh;
    grid-template-areas:
      'flip-text'
      'content'
      'footer';
    grid-template-columns: auto;
    grid-template-rows: repeat(2, fit-content(50vh)) min-content;
  }
`;

const BaseGridItem = styled.div`
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
  position: sticky;
  top: 0;
  padding: 0 1vw 0 1vw;

  @media (max-width: 1023px) {
    position: relative;
    left: 50%;
    width: fit-content;
    transform: translateX(-50%);
  }
`;

const FlipText = styled.div`
  grid-area: flip-text;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1023px) {
    position: relative;
    left: 50%;
    width: fit-content;
    padding: 20% 0;
    transform: translateX(-50%);
  }
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
        <h3>?????? ?????????</h3>
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
              ????????? ???????????? <em>??????</em>?????? <em>??????</em>??? ??? ????????????.
            </p>
          </FadeSimple>

          <Spacer height="10vh" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
            <FadeSimple direction="right" block>
              <TextWithCheckMark>
                <em>??????</em>??? <em>??????</em>??? ??????????????? ?????? <em>??????</em>????????? ?????? ??????
              </TextWithCheckMark>
            </FadeSimple>
            <FadeSimple direction="right" block>
              <TextWithCheckMark>
                <em>?????????</em>??? <em>??????????????????</em> ????????? ????????? ?????? ??????
              </TextWithCheckMark>
            </FadeSimple>
            <FadeSimple direction="right" block>
              <TextWithCheckMark>
                ??? ?????? ????????? ????????? ????????? <em>??????</em>?????? ????????? ??????
              </TextWithCheckMark>
            </FadeSimple>
            <FadeSimple direction="right" block>
              <TextWithCheckMark>
                ?????? ???????????? ?????? ???????????? ???????????? ?????? <em>?????????</em>
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
