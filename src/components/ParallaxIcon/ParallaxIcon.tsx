import { Parallax, ParallaxProps } from 'react-scroll-parallax';
import React, { CSSProperties, ImgHTMLAttributes } from 'react';
import { IconImage } from './styles';

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
