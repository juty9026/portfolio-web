import React from 'react';
import { CardWrap } from './styles';

interface Props {
  onClick?: React.MouseEventHandler;
  className?: string;
}

const Card: React.FC<Props> = ({ className, children, onClick }) => {
  return (
    <CardWrap className={className} onClick={onClick}>
      {children}
    </CardWrap>
  );
};

export default Card;
