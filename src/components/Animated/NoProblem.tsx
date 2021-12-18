/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { a, useSpring } from 'react-spring';

const Wrap = styled.div`
  width: 100%;
  font-size: 6rem;
  color: #fff;
  white-space: pre-wrap;
`;

const AnimatedDiv = styled(a.div)`
  position: absolute;
  display: inline-block;
  font-size: 6rem;
  color: #fff;
`;

interface Props {
  change: boolean;
}

const NoProblem: React.FC<Props> = ({ change }) => {
  const { opacity, transform } = useSpring({
    opacity: change ? 1 : 0,
    transform: `perspective(600px) rotateX(${change ? 180 : 0}deg)`,
  });
  return (
    <Wrap>
      {'No '}
      <AnimatedDiv style={{ opacity: opacity.to((o) => 1 - o), transform }}>Way.</AnimatedDiv>
      <AnimatedDiv style={{ opacity, transform, rotateX: '180deg' }}>Problem.</AnimatedDiv>
    </Wrap>
  );
};

export default NoProblem;
