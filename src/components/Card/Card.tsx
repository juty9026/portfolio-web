import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';

const CardWrap = styled.div`
  flex: 0 0 30%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 6vh 6vw 6vh 6vw;
  z-index: 1;
  padding: 1vh 1vw 1vh 1vw;
  font-size: 1rem;
`;

interface Props {
  onClick?: React.MouseEventHandler;
  style?: CSSProperties;
}

const Card: React.FC<Props> = ({ children, onClick, style }) => {
  return (
    <CardWrap style={style} onClick={onClick}>
      {children}
    </CardWrap>
  );
};

export default Card;
