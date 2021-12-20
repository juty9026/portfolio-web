import React, { CSSProperties, useMemo, useState } from 'react';
import { a, useTrail } from 'react-spring';
import { Waypoint } from 'react-waypoint';

interface Props {
  style?: CSSProperties;
  text?: string;
}

const FadeHorizontal: React.FC<Props> = ({ children, style, text }) => {
  const [inView, setInView] = useState(false);

  const items = useMemo(() => {
    if (text) {
      return Array.from(text).map((char) => <span>{char}</span>);
    }

    return React.Children.toArray(children);
  }, [children, text]);

  const trail = useTrail(items.length, {
    from: {
      x: -150,
      y: -40,
      opacity: 0,
    },
    to: {
      x: !inView ? -150 : 0,
      y: !inView ? -40 : 0,
      opacity: !inView ? 0 : 1,
    },
  });

  return (
    <Waypoint onEnter={() => setInView(true)} onLeave={() => setInView(false)} bottomOffset="30%">
      <div style={style}>
        {trail.map((s, i) => (
          <a.div key={i} style={{ ...s, display: 'inline-block' }}>
            {items[i]}
          </a.div>
        ))}
      </div>
    </Waypoint>
  );
};

export default FadeHorizontal;
