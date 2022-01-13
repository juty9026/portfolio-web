import React, { CSSProperties, useCallback, useMemo, useState } from 'react';
import { useTrail } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import * as S from './styles';

interface FadeVerticalCrossProps {
  style?: CSSProperties;
  text?: string;
}
const FadeVerticalCross: React.FC<FadeVerticalCrossProps> = ({ children, style, text }) => {
  const [inView, setInView] = useState(false);

  const items = useMemo(() => {
    if (text) {
      return Array.from(text).map((char) => <span>{char}</span>);
    }

    return React.Children.toArray(children);
  }, [children, text]);

  const oddItems = useMemo(() => items.filter((_, i) => !(i % 2)), [items]);
  const evenItems = useMemo(() => items.filter((_, i) => !!(i % 2)), [items]);

  const trailProps = useCallback(
    (direction: 'up' | 'down') => ({
      to: {
        y: !inView ? (direction === 'up' ? 24 : -24) : 0,
        opacity: !inView ? 0 : 1,
      },
    }),
    [inView]
  );

  const downTrail = useTrail(oddItems.length, trailProps('down'));
  const upTrail = useTrail(evenItems.length, trailProps('up'));
  const trail = useMemo(
    () =>
      Array.apply(null, Array(items.length)).map((n, i) =>
        i % 2 ? upTrail[parseInt(String(i / 2))] : downTrail[parseInt(String(i / 2))]
      ),
    [downTrail, upTrail]
  );

  return (
    <S.Wrap>
      <Waypoint onEnter={() => setInView(true)} onLeave={() => setInView(false)} bottomOffset="30%" />
      <div style={style}>
        {trail.map((s, i) => (
          <S.AnimatedDiv key={i} style={{ ...s }}>
            {items[i]}
          </S.AnimatedDiv>
        ))}
      </div>
    </S.Wrap>
  );
};
export default FadeVerticalCross;
