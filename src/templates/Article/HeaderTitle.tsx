import React from 'react';
import { StyledH1, StyledHeader } from './styles';

const HeaderTitle: React.FC = ({ children }) => {
  return (
    <StyledHeader>
      <StyledH1>
        <em>{children}</em>
      </StyledH1>
    </StyledHeader>
  );
};

export default HeaderTitle;
