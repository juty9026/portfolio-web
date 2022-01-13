import React, { CSSProperties } from 'react';
import { Wrap } from './styles';

interface PolaroidImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  title?: string;
  styleOuter?: CSSProperties;
}
const PolaroidImage: React.FC<PolaroidImageProps> = ({ title, styleOuter, src, alt, ...imageProps }) => {
  return (
    <Wrap style={styleOuter}>
      <img {...imageProps} width="100%" src={src} alt={alt} />
      <p>{title}</p>
    </Wrap>
  );
};

export default PolaroidImage;
