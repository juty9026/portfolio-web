import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  line-height: 1rem;
  color: #a9b7c6;
`;

const LineNumbers = styled.span`
  color: #606366;
  background-color: #313335;
`;

interface Props {
  lineNumber?: number;
}

const Line: React.FC<Props> = ({ children, lineNumber }) => {
  return (
    <P>
      {!!lineNumber && <LineNumbers>{lineNumber}</LineNumbers>}
      {children}
    </P>
  );
};

export default Line;
