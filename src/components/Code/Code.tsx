import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.pre`
  line-height: 100%;
  font-family: monospace;
  background-color: #2b2b2b;
  border-width: 0.01mm;
  border-color: #000000;
  border-style: solid;
  padding: 4px;
  font-size: 13pt;
`;

const Code: React.FC = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Code;
