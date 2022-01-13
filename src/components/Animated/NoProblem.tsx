import React from 'react';
import { useSpring } from 'react-spring';
import * as S from './styles';

interface NoProblemProps {
  change: boolean;
}
const NoProblem: React.FC<NoProblemProps> = ({ change }) => {
  const { opacity, transform } = useSpring({
    opacity: change ? 1 : 0,
    transform: `perspective(600px) rotateX(${change ? 180 : 0}deg)`,
  });
  return (
    <S.Wrap bigFont>
      <em>No </em>
      <em>
        <S.AnimatedDiv style={{ opacity: opacity.to((o) => 1 - o), transform }}>Way.</S.AnimatedDiv>
        <S.AnimatedDiv style={{ opacity, transform, rotateX: '180deg' }} absolute>
          Problem.
        </S.AnimatedDiv>
      </em>
    </S.Wrap>
  );
};

export default NoProblem;
