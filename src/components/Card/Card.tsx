/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/react';

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
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
  css: SerializedStyles;
}

const Card: React.FC<Props> = ({ children, onClick, css }) => {
  return (
    <CardWrap css={css} onClick={onClick}>
      {children}
    </CardWrap>
  );
};

export default Card;
