import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.div`
  height: 60vh;
  margin-bottom: 5vh;
`;

const TitleText = styled.h3`
  flex: 1;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  letter-spacing: 0.1em;
  color: white;

  @media (max-width: 767px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 6rem;
  }
  @media (min-width: 1024px) {
    font-size: 9rem;
  }
`;

const Title: React.FC = ({ children }) => {
  return (
    <Wrap>
      <TitleText>{children}</TitleText>
    </Wrap>
  );
};

export default Title;
