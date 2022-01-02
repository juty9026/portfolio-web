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

  & p {
    font-family: 'Homemade Apple', cursive;
    text-align: center;
  }

  &:hover {
    animation: ${({ style }) => zoomInKeyframes(style?.transform)} 1s ease both;
    z-index: 1;
  }
`;

const calculateWidth = (width: string | number | undefined, scale: number) => {
  if (!width) {
    return null;
  }

  if (typeof width === 'string') {
    const valueRegEx = /\d+/;
    const value = valueRegEx.test(width) ? Number(valueRegEx.exec(width)![0]) * scale : null;
    const unitRegEx = /\D+/;
    const unit = unitRegEx.test(width) ? unitRegEx.exec(width)![0] : null;
    return value && unit ? `${value}${unit}` : null;
  } else {
    return width * scale;
  }
};

const StyledImg = styled.img`
  @media (max-width: 767px) {
    width: ${({ width }) => calculateWidth(width, 0.4)};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: ${({ width }) => calculateWidth(width, 0.5)};
  }

  @media (min-width: 1024px) {
    width: ${({ width }) => calculateWidth(width, 1)};
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
      <StyledImg {...imageProps} src={src} alt={alt} style={styleImage} />
      <p>{title}</p>
    </Wrap>
  );
};

export default PolaroidImage;
