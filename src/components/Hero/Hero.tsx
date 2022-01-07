import React, { useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { a, config, useTrail } from 'react-spring';

const Wrap = styled.header`
  height: 100vh;
`;

const FixedContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 10%;
  background-color: #262626;
  color: white;
`;

const BannerTextWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 5rem;
  gap: 0.2em;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  @media (max-width: 767px) {
    font-size: 4rem;
  }
`;

const StyledEm = styled.em`
  @media (max-width: 767px) {
    text-align: center;
    width: 100%;
  }
`;

const BannerText: React.FC = ({ children }) => {
  return (
    <span>
      <StyledEm>{children}</StyledEm>
    </span>
  );
};

const ColorText = styled.span`
  color: #03b58d;
`;

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
