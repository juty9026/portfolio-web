import React from 'react';
import styled from '@emotion/styled';
import { a, useSpring } from 'react-spring';

const Wrap = styled.div`
  display: inline-block;
  font-size: 6rem;
  color: #fff;

  @media (max-width: 767px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

const StyledAnimatedDiv = styled(a.div)`
  display: inline-block;
`;

interface Props {
  change: boolean;
}

const IAmPossible: React.FC<Props> = ({ change }) => {
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
    <Wrap>
      I<StyledAnimatedDiv style={springApostrophe}>'</StyledAnimatedDiv>
      <StyledAnimatedDiv style={springMPossible}>
        m<StyledAnimatedDiv style={springPossible}>possible.</StyledAnimatedDiv>
      </StyledAnimatedDiv>
    </Wrap>
  );
};

export default IAmPossible;
