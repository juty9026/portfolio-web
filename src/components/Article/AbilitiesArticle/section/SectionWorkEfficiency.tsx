import React from 'react';
import { Section, Spacer } from '@components/Article/AbilitiesArticle/styled';
import { FadeSimple } from '@components/Animated';
import { ParallaxIcon } from '@components/ParallaxIcon';
import DataGrip from '@images/DataGrip.png';
import IntelliJ from '@images/IntelliJ.png';
import Slack from '@images/Slack.png';
import SublimeText from '@images/SublimeText.png';
import VisualStudioCode from '@images/VisualStudioCode.png';
import WebStorm from '@images/WebStorm.png';

const SectionWorkEfficiency: React.FC = () => {
  return (
    <Section theme="dark">
      <Spacer height="20vh" />

      <FadeSimple direction="top" bottomOffset="50%">
        <h3>업무 효율 극대화.</h3>
      </FadeSimple>

      <Spacer height="20vh" />

      <div style={{ position: 'absolute', top: '80vh', left: 0, width: '100vw' }}>
        <ParallaxIcon
          src={IntelliJ}
          alt={'IntelliJ'}
          style={{ transform: 'scale(0.9)' }}
          styleOuter={{ position: 'absolute', left: '360px' }}
          y={['200px', '600px']}
        />
        <ParallaxIcon
          src={DataGrip}
          alt={'DataGrip'}
          style={{ transform: 'scale(0.75)' }}
          styleOuter={{ position: 'absolute', right: '360px' }}
          y={['200px', '600px']}
        />
        <ParallaxIcon
          src={Slack}
          alt={'Slack'}
          style={{ transform: 'scale(0.9)' }}
          styleOuter={{ position: 'absolute', left: '100px' }}
          y={['150px', '500px']}
        />
        <ParallaxIcon
          src={SublimeText}
          alt={'SublimeText'}
          style={{ transform: 'scale(0.6)' }}
          styleOuter={{ position: 'absolute', right: '100px' }}
          y={['100px', '500px']}
        />
        <ParallaxIcon
          src={WebStorm}
          alt={'WebStorm'}
          styleOuter={{ position: 'absolute', left: '230px' }}
          y={['150px', '400px']}
        />
        <ParallaxIcon
          src={VisualStudioCode}
          alt={'VisualStudioCode'}
          style={{ transform: 'scale(90%)' }}
          styleOuter={{ position: 'absolute', right: '230px' }}
          y={['100px', '400px']}
        />
      </div>

      <Spacer height="30vh" />

      <div style={{ maxWidth: '640px', margin: 'auto', backgroundColor: '#000000' }}>
        <div>
          <FadeSimple direction="left" style={{ display: 'block' }} bottomOffset="10%">
            <p>
              텍스트 편집 능력. <em>최상</em>.
            </p>
          </FadeSimple>
          <FadeSimple direction="right" style={{ display: 'block' }} bottomOffset="10%">
            <p>타이핑 속도가 빠르고, 툴을 잘 다룹니다.</p>
          </FadeSimple>
        </div>

        <Spacer height="10vh" />

        <div>
          <FadeSimple direction="right" style={{ display: 'block' }} bottomOffset="10%">
            <p>
              적응 능력도. <em>최상</em>.
            </p>
          </FadeSimple>
          <FadeSimple direction="left" style={{ display: 'block' }} bottomOffset="10%">
            <p>
              처음 접하는 <em>환경</em>, <em>사람</em>, <em>문화</em>. 그리고 <em>언어</em>, <em>프레임워크</em>,{' '}
              <em>라이브러리</em> 뿐만 아니라 <em>다양한 도구</em>까지.
            </p>
          </FadeSimple>
        </div>

        <Spacer height="10vh" />

        <div>
          <FadeSimple direction="left" style={{ display: 'block' }} bottomOffset="10%">
            <p>
              반복을 줄이고 <em>개선</em>하는 습관.
            </p>
          </FadeSimple>
          <FadeSimple direction="right" style={{ display: 'block' }} bottomOffset="10%">
            <p>
              반복되는 작업을 자동화하여 소요시간을 줄이고 <em>업무효율을 높입니다</em>.
            </p>
          </FadeSimple>
          <FadeSimple direction="left" style={{ display: 'block' }} bottomOffset="10%">
            <p>
              반복되는 코드를 추상화하여 분리해내고 <em>유지보수를 쉽게 만듭니다</em>.
            </p>
          </FadeSimple>
        </div>
      </div>

      <Spacer height="50vh" />
    </Section>
  );
};

export default SectionWorkEfficiency;
