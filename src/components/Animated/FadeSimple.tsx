import React, { CSSProperties, useMemo, useState } from 'react';
import { a, useSpring } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import styled from '@emotion/styled';

interface Props {
  block?: boolean;
  className?: string;
  style?: CSSProperties;
  direction?: 'none' | 'top' | 'topRight' | 'right' | 'rightBottom' | 'bottom' | 'bottomLeft' | 'left' | 'leftTop';
  topOffset?: string | number;
  bottomOffset?: string | number;
}

const Wrap = styled.div`
  display: inline-block;
`;

const AnimatedDiv = styled(a.div)`
  display: inline-block;
`;

const FadeSimple: React.FC<Props> = ({
  block = false,
  children,
  className,
  style,
  direction = 'none',
  topOffset = '-10%',
  bottomOffset = '10%',
}) => {
  const [inView, setInView] = useState(false);

  const fromX = useMemo(() => {
    if (direction === 'topRight' || direction === 'right' || direction === 'rightBottom') {
      return -40;
    }
    if (direction === 'bottomLeft' || direction === 'left' || direction === 'leftTop') {
      return 40;
    }
    return 0;
  }, [direction]);
  const fromY = useMemo(() => {
    if (direction === 'top' || direction === 'topRight' || direction === 'leftTop') {
      return 80;
    }
    if (direction === 'rightBottom' || direction === 'bottom' || direction === 'bottomLeft') {
      return -80;
    }
    return 0;
  }, [direction]);
  const toX = useMemo(() => (!inView ? fromX : 0), [inView, fromX]);
  const toY = useMemo(() => (!inView ? fromY : 0), [inView, fromY]);

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? toX : fromX,
    y: inView ? toY : fromY,
  });

  return (
    <Wrap className={className} style={style}>
      <AnimatedDiv style={{ ...spring, display: block ? 'block' : 'inline-block' }}>{children}</AnimatedDiv>
      <Waypoint
        onEnter={() => setInView(true)}
        onLeave={() => setInView(false)}
        topOffset={topOffset}
        bottomOffset={bottomOffset}
        fireOnRapidScroll
      />
    </Wrap>
  );
};

export default FadeSimple;
