import React, { useCallback, useMemo } from 'react';
import { a, config, useTrail } from 'react-spring';
import { Wrap, FixedContainer, BannerTextWrap, ColorText } from './styles';

const BannerText: React.FC = ({ children }) => {
  return (
    <span>
      <em>{children}</em>
    </span>
  );
};

const Trail: React.FC = ({ children }) => {
  const childrenArray = useMemo(() => {
    return React.Children.toArray(children);
  }, [children]);

  const trail = useTrail(childrenArray.length, {
    from: { transform: 'scale(100)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: config.molasses,
    delay: 1000,
  });

  return (
    <>
      {trail.map((style, index) => (
        <a.div style={style}>{childrenArray[index]}</a.div>
      ))}
    </>
  );
};

const Hero: React.FC = () => {
  const paragraph = useMemo(() => {
    return "LET'S MAKE SOMETHING COOL TOGETHER.";
  }, []);

  const words = useMemo(() => {
    return paragraph.split(' ');
  }, [paragraph]);

  const colorCharacters = useMemo(() => {
    return ["'", '.', 'O'];
  }, []);

  const renderWord = useCallback(
    (word: string) => (
      <BannerText>
        {Array.from(word).map((char) =>
          colorCharacters.includes(char) ? <ColorText>{char}</ColorText> : <span>{char}</span>
        )}
      </BannerText>
    ),
    [colorCharacters]
  );

  return (
    <Wrap>
      <FixedContainer>
        <BannerTextWrap>
          <Trail>{words.map(renderWord)}</Trail>
        </BannerTextWrap>
      </FixedContainer>
    </Wrap>
  );
};

export default Hero;
