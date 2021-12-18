/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FadeSimple, IAmPossible, NoProblem } from '@components/Animated';
import { Waypoint } from 'react-waypoint';
import StickyBox from 'react-sticky-box';
import * as styles from '@styles';

const Wrap = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 50vh 0 20vh 0;
  background-color: #000;
`;

const Spacer = styled.div<{ height: number | string }>`
  height: ${({ height }) => height};
`;

const FlexContainer = styled.div`
  display: flex;
  padding: 0 5vw;
`;

const Half = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 5vw;
`;

const H3 = styled.h3`
  display: inline-block;
  color: #fff;
  font-size: 4rem;
`;

const P = styled.p`
  font-size: 2rem;
  color: #6e6e73;
`;

const FlexStickyBox = styled(StickyBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AbilitiesSection1: React.FC = () => {
  const [changeWord, setChangeWord] = useState(false);
  return (
    <Wrap>
      <FadeSimple direction={'top'} bottomOffset="60%">
        <H3>자타공인 해결사.</H3>
      </FadeSimple>

      <Spacer height="10vh" />

      <FlexContainer>
        <Half>
          <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <FadeSimple direction="right">
              <P>
                어디에서 문제가 생길까요? 원인이 발생하는 포인트를 감각적으로 찾아낼 수 있습니다. 확실하게 아닌 부분을
                소거하고, 가능성이 높은 부분부터 확인해보면 답은 금방 나오게 되죠.
              </P>
            </FadeSimple>
          </div>
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
          <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <FadeSimple direction="right">
              <P>
                원인을 찾았으니 해결해봅시다. 잘못 구현되어 원하지 않는 결과가 나온것이라면 로직을 수정하고, 추가적인
                기능이 필요하다면 적절한 위치에 끼워 넣으면 돼요. 하지만, 아무리 급해도 사이드 이펙트가 발생할 수 있는
                부분은 꼼꼼하게 확인해야 합니다!
              </P>
            </FadeSimple>
            {/*</TextContainer>*/}
          </div>
        </Half>
        <Half>
          <FlexStickyBox css={styles.fullHeight}>
            <FadeSimple direction="left" style={{ textAlign: 'left', marginLeft: '5vw' }}>
              <NoProblem change={changeWord} />
            </FadeSimple>
            <FadeSimple direction="left" style={{ textAlign: 'left', marginLeft: '5vw' }}>
              <IAmPossible change={changeWord} />
            </FadeSimple>
          </FlexStickyBox>
        </Half>
      </FlexContainer>
    </Wrap>
  );
};

export default AbilitiesSection1;
