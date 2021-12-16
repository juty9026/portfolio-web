import React from 'react';
import styled from '@emotion/styled';

const StyledSpan = styled.span`
  color: #629755;
  font-style: italic;
`;

const Comment: React.FC = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default Comment;
