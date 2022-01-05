import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  @media (max-width: 1023px) {
    padding: 0 6vw 10vh 6vw;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 0 8vw 10vh 8vw;
  }
  @media (min-width: 1440px) {
    padding: 0 10vw 10vh 10vw;
  }
`;

const Content: React.FC = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Content;
