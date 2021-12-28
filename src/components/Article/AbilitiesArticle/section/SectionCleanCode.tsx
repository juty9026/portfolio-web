import React, { useState } from 'react';
import { FadeSimple } from '@components/Animated';
import { a, useSpring } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import { Section, Spacer } from '@components/Article/AbilitiesArticle/styled';

const SectionCleanCode: React.FC = () => {
  const [codeVisible, setCodeVisible] = useState(false);
  const { transform } = useSpring({ transform: `perspective(6000px) rotateY(${codeVisible ? 0 : 90}deg)` });

  return (
    <Section theme="light" style={{ zIndex: 0 }}>
      <FadeSimple direction="top" bottomOffset="50%">
        <h3>술술 읽히는 코드.</h3>
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
          src="https://codesandbox.io/embed/messenger-v4lpc?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fclient%2Fsrc%2FChatRoom.tsx&theme=dark"
          style={{
            width: '80vw',
            height: '80vh',
            border: '1px solid black',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title="Messenger"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </a.div>
    </Section>
  );
};

export default SectionCleanCode;
