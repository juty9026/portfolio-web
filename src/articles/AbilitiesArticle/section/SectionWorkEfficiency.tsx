import React from 'react';
import { Section, Spacer } from '../styled';
import { FadeSimple } from '@components/Animated';
import { ParallaxIcon } from '@components/ParallaxIcon';
import DataGrip from '@images/DataGrip.png';
import IntelliJ from '@images/IntelliJ.png';
import Slack from '@images/Slack.png';
import SublimeText from '@images/SublimeText.png';
import VisualStudioCode from '@images/VisualStudioCode.png';
import WebStorm from '@images/WebStorm.png';
import styled from '@emotion/styled';

const Headline = styled.p`
  padding: 2vh 0;
`;

const ParallaxContainer = styled.div`
  position: absolute;
  top: 110vh;
  left: 0;
  width: 100vw;

  @media (max-width: 767px) {
    display: none;
  }
`;

const SectionWorkEfficiency: React.FC = () => {
  return (
    <Section theme="dark">
      <Spacer height="20vh" />

      <FadeSimple direction="top" bottomOffset="50%">
        <h3>업무 효율 극대화</h3>
      </FadeSimple>

      <Spacer height="20vh" />

      <ParallaxContainer>
        <ParallaxIcon
          src={IntelliJ}
          alt={'IntelliJ'}
          style={{ transform: 'scale(0.9)' }}
          styleOuter={{ position: 'absolute', left: '12%' }}
          y={['200px', '600px']}
        />
        <ParallaxIcon
          src={DataGrip}
          alt={'DataGrip'}
          style={{ transform: 'scale(0.75)' }}
          styleOuter={{ position: 'absolute', right: '12%' }}
          y={['200px', '600px']}
        />
        <ParallaxIcon
          src={Slack}
          alt={'Slack'}
          style={{ transform: 'scale(0.9)' }}
          styleOuter={{ position: 'absolute', left: '5%' }}
          y={['150px', '500px']}
        />
        <ParallaxIcon
          src={SublimeText}
          alt={'SublimeText'}
          style={{ transform: 'scale(0.6)' }}
          styleOuter={{ position: 'absolute', right: '5%' }}
          y={['100px', '500px']}
        />
        <ParallaxIcon
          src={WebStorm}
          alt={'WebStorm'}
          styleOuter={{ position: 'absolute', left: '18%' }}
          y={['150px', '400px']}
        />
        <ParallaxIcon
          src={VisualStudioCode}
          alt={'VisualStudioCode'}
          style={{ transform: 'scale(90%)' }}
          styleOuter={{ position: 'absolute', right: '18%' }}
          y={['100px', '400px']}
        />
      </ParallaxContainer>

      <Spacer height="30vh" />

      <div style={{ maxWidth: '1280px', margin: 'auto' }}>
        <div>
          <FadeSimple direction="left" style={{ display: 'block' }} bottomOffset="10%">
            <Headline>
              텍스트 편집 능력 : <em>최상</em>
            </Headline>
          </FadeSimple>
          <FadeSimple direction="right" style={{ display: 'block' }} bottomOffset="10%">
            <p>타이핑 속도가 빠르고, 툴을 잘 다룹니다.</p>
          </FadeSimple>
        </div>

        <Spacer height="10vh" />

        <div>
          <FadeSimple direction="right" style={{ display: 'block' }} bottomOffset="10%">
            <Headline>
              적응 능력 : <em>최상</em>
            </Headline>
          </FadeSimple>
          <FadeSimple direction="left" style={{ display: 'block' }} bottomOffset="10%">
            <p>
              처음 접하는 <em>환경</em>, <em>사람</em>, <em>문화</em>.
            </p>
          </FadeSimple>
          <FadeSimple direction="right" style={{ display: 'block' }} bottomOffset="10%">
            <p>
              그리고 <em>언어</em>, <em>프레임워크</em>, <em>라이브러리</em>
            </p>
          </FadeSimple>
          <FadeSimple direction="left" style={{ display: 'block' }} bottomOffset="10%">
            <p>
              뿐만 아니라 <em>다양한 도구</em>까지
            </p>
          </FadeSimple>
        </div>

        <Spacer height="10vh" />

        <div>
          <FadeSimple direction="left" style={{ display: 'block' }} bottomOffset="10%">
            <Headline>
              반복을 줄이고 <em>개선</em>하는 <em>습관</em>
            </Headline>
          </FadeSimple>
          <FadeSimple direction="right" style={{ display: 'block' }} bottomOffset="10%">
            <p>
              반복되는 작업을 <em>자동화</em>하여 소요시간을 줄이고
            </p>
          </FadeSimple>
          <FadeSimple direction="left" style={{ display: 'block' }} bottomOffset="10%">
            <p>
              <em>업무효율</em>을 <em>향상</em>시킵니다.
            </p>
          </FadeSimple>
          <FadeSimple direction="right" style={{ display: 'block' }} bottomOffset="10%">
            <p>반복되는 코드를 추상화하여 분리해내고</p>
          </FadeSimple>
          <FadeSimple direction="left" style={{ display: 'block' }} bottomOffset="10%">
            <p>
              <em>유지보수</em>를 <em>쉽게</em> 만듭니다.
            </p>
          </FadeSimple>
        </div>
      </div>

      <Spacer height="50vh" />
    </Section>
  );
};

export default SectionWorkEfficiency;
