import React from 'react';
import styled from '@emotion/styled';

const StyledP = styled.p`
  padding: 0 5%;
  font-size: 2rem;
  color: white;
  text-align: right;
`;
const Period: React.FC = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};

export default Period;
