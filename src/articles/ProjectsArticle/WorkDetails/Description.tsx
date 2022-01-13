import React from 'react';
import styled from '@emotion/styled';

const StyledPre = styled.pre`
  color: #8892b0;
  white-space: pre-line;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.25rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const Description: React.FC = ({ children }) => {
  return <StyledPre>{children}</StyledPre>;
};

export default Description;
