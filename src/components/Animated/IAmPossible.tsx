import React from 'react';
import { useSpring } from 'react-spring';
import * as S from './styles';

interface IAmPossibleProps {
  change: boolean;
}
const IAmPossible: React.FC<IAmPossibleProps> = ({ change }) => {
  const springPossible = useSpring({
    delay: 200,
    x: change ? 10 : 0,
  });
  const springMPossible = useSpring({
    delay: 200,
    x: change ? 0 : -18,
  });
  const springApostrophe = useSpring({
    delay: 200,
    opacity: change ? 1 : 0,
    y: change ? 0 : -15,
  });

  return (
    <S.Wrap bigFont>
      <em>
        I<S.AnimatedDiv style={springApostrophe}>'</S.AnimatedDiv>
        <S.AnimatedDiv style={springMPossible}>
          m<S.AnimatedDiv style={springPossible}>possible.</S.AnimatedDiv>
        </S.AnimatedDiv>
      </em>
    </S.Wrap>
  );
};

export default IAmPossible;
