import React from 'react';
import styled from '@emotion/styled';
import { a, useSpring } from 'react-spring';

const Wrap = styled.div`
  width: 100%;
  color: #fff;
  white-space: pre-wrap;

  @media (max-width: 767px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

const AnimatedDiv = styled(a.div)`
  position: absolute;
  display: inline-block;
  color: #fff;
`;

const StyledEm = styled.em`
  display: inline-block;
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
      <StyledEm>
        {'No '}
        <AnimatedDiv style={{ opacity: opacity.to((o) => 1 - o), transform }}>Way.</AnimatedDiv>
        <AnimatedDiv style={{ opacity, transform, rotateX: '180deg' }}>Problem.</AnimatedDiv>
      </StyledEm>
    </Wrap>
  );
};

export default NoProblem;
