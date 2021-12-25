import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const zoomInKeyframes = (transform: string | undefined) => keyframes`
  15% {
    transform: ${transform} scale(0.9);
  }
  100% {
    transform: ${transform} scale(1.6);
    z-index: 1;
  }
`;

const Wrap = styled.div<CSSProperties>`
  text-align: center;
  display: inline-block;
  position: relative;
  border: solid 12px #fff;
  background: #fff;
  box-shadow: 0 0 15px 0 #555;
  transition: all 1s ease;
  top: 50px;

  &:hover {
    animation: ${({ style }) => zoomInKeyframes(style?.transform)} 1s ease both;
  }

  & p {
    font-family: 'Homemade Apple', cursive;
    text-align: center;
  }
`;

interface PolaroidImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  title?: string;
  styleOuter?: CSSProperties;
  styleImage?: CSSProperties;
}
const PolaroidImage: React.FC<PolaroidImageProps> = ({ title, styleOuter, styleImage, src, alt, ...imageProps }) => {
  return (
    <Wrap style={styleOuter}>
      <img {...imageProps} src={src} alt={alt} style={styleImage} />
      <p>{title}</p>
    </Wrap>
  );
};

export default PolaroidImage;
