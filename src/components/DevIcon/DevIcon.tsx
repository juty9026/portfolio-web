import React, { useMemo } from 'react';
import 'devicon/devicon.min.css';
import DevIconName from '@/components/DevIcon/types/DevIconName';
import devIconMap from '@/components/DevIcon/devIconMap';

interface DevIconProps {
  name: DevIconName;
  size?: number;
  font?: boolean;
  plain?: boolean;
  wordmark?: boolean;
  color?: boolean;
  className?: string;
}
const DevIcon: React.FC<DevIconProps> = ({
  name,
  size = 32,
  font = false,
  plain = false,
  wordmark = false,
  color = false,
  className,
}) => {
  const basename = useMemo(() => {
    return devIconMap[name];
  }, [name]);

  const iClassName = useMemo(() => {
    if (!font) {
      return undefined;
    }

    return `devicon-${basename}-plain${wordmark ? '-wordmark' : ''}${color ? ' colored' : ''}${
      className ? ` ${className}` : ''
    }`;
  }, [basename, font, wordmark, color]);

  const imgSrc = useMemo(() => {
    if (font) {
      return undefined;
    }

    const filename = `${basename}/${basename}-${plain ? 'plain' : 'original'}${wordmark ? '-wordmark' : ''}.svg`;
    return require(`../../../node_modules/devicon/icons/${filename}`).default;
  }, [basename, font, plain, wordmark]);

  return font ? (
    <i className={iClassName} style={{ fontSize: size }} />
  ) : (
    <img className={className} width={size} height={size} src={imgSrc} alt={basename} />
  );
};

export default DevIcon;
