/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { a, useSpring } from 'react-spring';

const Wrap = styled.div`
  display: inline-block;
  font-size: 6rem;
  color: #fff;
`;

const AnimatedDiv = styled(a.div)`
  display: inline-block;
`;

interface Props {
  change: boolean;
}

const IAmPossible: React.FC<Props> = ({ change }) => {
  const animIAm = useSpring({
    delay: 200,
    x: change ? 10 : 0,
  });
  const animStyleI = useSpring({
    delay: 200,
    x: change ? 10 : -20,
  });
  const animStyleAm = useSpring({
    delay: 200,
    opacity: change ? 1 : 0,
    y: change ? 0 : -15,
  });

  return (
    <Wrap>
      <span>I</span>
      <AnimatedDiv style={animStyleAm}>
        <span>'</span>
      </AnimatedDiv>
      <AnimatedDiv style={animStyleI}>
        <span>m</span>
        <AnimatedDiv style={animIAm}>
          <span>possible.</span>
        </AnimatedDiv>
      </AnimatedDiv>
    </Wrap>
  );
};

export default IAmPossible;
