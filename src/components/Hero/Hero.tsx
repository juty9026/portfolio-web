import React from 'react';
import styled from '@emotion/styled';

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

const BannerText = styled.h1`
  @media (max-width: 767px) {
    text-align: center;
    width: 100%;
  }
`;

const Hero: React.FC = () => {
  return (
    <Wrap>
      <FixedContainer>
        <BannerTextWrap>
          <BannerText>LET'S</BannerText>
          <BannerText>MAKE</BannerText>
          <BannerText>SOMETHING</BannerText>
          <BannerText>COOL</BannerText>
          <BannerText>TOGETHER.</BannerText>
        </BannerTextWrap>
      </FixedContainer>
    </Wrap>
  );
};

export default Hero;
