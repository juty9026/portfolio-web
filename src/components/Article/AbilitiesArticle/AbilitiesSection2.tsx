import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FadeSimple } from '@components/Animated';
import { a, useSpring } from 'react-spring';
import { Waypoint } from 'react-waypoint';

const Wrap = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 50vh 0 20vh 0;
  background-color: #fff;
`;

const Spacer = styled.div<{ height: number | string }>`
  height: ${({ height }) => height};
`;

const H3 = styled.h3`
  display: inline-block;
  color: #000;
  font-size: 4rem;
`;

const AbilitiesSection2: React.FC = () => {
  const [codeVisible, setCodeVisible] = useState(false);
  const { transform } = useSpring({ transform: `perspective(6000px) rotateY(${codeVisible ? 0 : 90}deg)` });

  return (
    <Wrap>
      <FadeSimple direction={'top'} bottomOffset="50%">
        <H3>코드가 읽히는 마법.</H3>
      </FadeSimple>

      <Spacer height="10vh" />

      <Waypoint
        onEnter={() => setCodeVisible(true)}
        onLeave={() => setCodeVisible(false)}
        topOffset="-100%"
        bottomOffset="60%"
      />
      <a.div style={{ transform }}>
        <iframe
          src="https://codesandbox.io/embed/react-playground-forked-0w2f8?fontsize=14&hidenavigation=1&hidedevtools=1&codemirror=1&theme=dark&autoresize=1"
          style={{
            width: '80vw',
            height: '80vh',
            border: '1px solid black',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title="React PlayGround"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </a.div>
    </Wrap>
  );
};

export default AbilitiesSection2;
