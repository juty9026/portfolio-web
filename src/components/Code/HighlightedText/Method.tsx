import React from 'react';
import styled from '@emotion/styled';

const StyledSpan = styled.span`
  color: #ffb86c;
`;

const Method: React.FC = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default Method;
