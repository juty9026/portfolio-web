import React from 'react';
import styled from '@emotion/styled';

const StyledSpan = styled.span`
  color: #cc7832;
`;

const Keyword: React.FC = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default Keyword;
