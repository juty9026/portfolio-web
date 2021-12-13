import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface WrapProps {
  active?: boolean;
  clickable?: boolean;
}

const Wrap = styled.div<WrapProps>`
  margin: 0.4rem 0 0.4rem 0;
  padding: 0.4rem;
  border: 2px solid transparent;
  border-radius: 1rem;
  ${({ active, clickable }) => {
    if (active) {
      return css`
        border-color: #04c2c9;
      `;
    }
    if (clickable) {
      return css`
        cursor: pointer;
      `;
    }
  }}
`;

const ExpBar = styled.div`
  height: 2.2rem;
  border-radius: 1rem;
  background-color: #eeeeee;
`;

const Exp = styled.div`
  position: absolute;
  height: 100%;
  border-radius: inherit;
  background-color: #00a1a7;
`;

// noinspection CssReplaceWithShorthandSafely
const Tag = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #04c2c9;
  color: #ffffff;
  font-size: 1rem;
`;

const Number = styled.span`
  position: absolute;
  height: 100%;
  top: 0;
  right: 1.2rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

interface Props {
  active?: boolean;
  title: string;
  exp: number;
  style?: React.CSSProperties;
  onClick?: Function;
}

const TechExpBar: React.FC<Props> = ({ active = false, title, exp, style, onClick }) => {
  return (
    <Wrap style={style} active={active} clickable={!!onClick} onClick={() => onClick && onClick(title)}>
      <ExpBar>
        <Exp
          style={{
            width: `${exp}%`,
          }}
        />
        <Tag>{title}</Tag>
        <Number>{`${exp}%`}</Number>
      </ExpBar>
    </Wrap>
  );
};

export default TechExpBar;
