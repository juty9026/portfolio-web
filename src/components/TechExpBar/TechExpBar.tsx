import React from 'react';
import { config, Spring } from 'react-spring';
import { AnimatedExp, ExpBar, Tag, Wrap, Number } from './styles';

interface Props {
  active?: boolean;
  title: string;
  exp: number;
  style?: React.CSSProperties;
  onClick?: Function;
}

const TechExpBar: React.FC<Props> = ({ active = false, title, exp, style, onClick }) => {
  return (
    <Spring from={{ width: '20%' }} to={{ width: `${exp}%` }} config={config.molasses}>
      {(styles) => {
        return (
          <Wrap style={style} active={active} clickable={!!onClick} onClick={() => onClick && onClick(title)}>
            <ExpBar>
              <AnimatedExp style={styles} />
              <Tag>
                <span>{title}</span>
              </Tag>
              <Number>{`${exp}%`}</Number>
            </ExpBar>
          </Wrap>
        );
      }}
    </Spring>
  );
};

export default TechExpBar;
