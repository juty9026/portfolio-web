import React from 'react';
import styled from '@emotion/styled';

const StyledSpan = styled.span`
  color: #f1fa8c;
`;

const Annotation: React.FC = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default Annotation;
