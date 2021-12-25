import styled from '@emotion/styled';
import { Parallax, ParallaxProps } from 'react-scroll-parallax';
import React, { CSSProperties, ImgHTMLAttributes } from 'react';

const IconImage = styled.img`
  width: 80px;
  height: 80px;
`;

interface ParallaxIconProps extends ParallaxProps, ImgHTMLAttributes<HTMLImageElement> {
  style?: CSSProperties;
}
const ParallaxIcon: React.FC<ParallaxIconProps> = ({ x, y, styleOuter, src, alt, style }) => {
  return (
    <Parallax x={x} y={y} styleOuter={styleOuter}>
      <IconImage src={src} alt={alt} style={style} />
    </Parallax>
  );
};

export default ParallaxIcon;
