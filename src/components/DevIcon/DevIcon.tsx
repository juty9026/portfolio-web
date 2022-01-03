import React, { useMemo } from 'react';
import 'devicon/devicon.min.css';
import DevIconName from '@components/DevIcon/types/DevIconName';
import devIconMap from '@components/DevIcon/devIconMap';

interface DevIconProps {
  name: DevIconName;
  size?: number;
  font?: boolean;
  plain?: boolean;
  wordmark?: boolean;
  color?: boolean;
}
const DevIcon: React.FC<DevIconProps> = ({
  name,
  size = 32,
  font = false,
  plain = false,
  wordmark = false,
  color = false,
}) => {
  const basename = useMemo(() => {
    return devIconMap[name];
  }, [name]);

  const className = useMemo(() => {
    if (!font) {
      return undefined;
    }

    return `devicon-${basename}-plain${wordmark ? '-wordmark' : ''}${color ? ' colored' : ''}`;
  }, [basename, wordmark, color]);

  const src = useMemo(() => {
    if (font) {
      return undefined;
    }

    const filename = `${basename}/${basename}-${plain ? 'plain' : 'original'}${wordmark ? '-wordmark' : ''}.svg`;
    return require(`../../../node_modules/devicon/icons/${filename}`).default;
  }, [basename, plain, wordmark]);

  return font ? (
    <i className={className} style={{ fontSize: size }} />
  ) : (
    <img width={size} height={size} src={src} alt={basename} />
  );
};

export default DevIcon;
