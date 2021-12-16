import React from 'react';
import styled from '@emotion/styled';

const StyledSpan = styled.span`
  color: #bd93f9;
`;

const Member: React.FC = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default Member;
