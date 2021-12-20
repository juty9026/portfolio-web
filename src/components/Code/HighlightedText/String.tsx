import React from 'react';
import styled from '@emotion/styled';

const StyledSpan = styled.span`
  color: #6a8759;
  font-style: italic;
`;

const String: React.FC = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default String;
