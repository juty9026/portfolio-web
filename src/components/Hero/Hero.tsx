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

const Hero: React.FC = () => {
  return (
    <Wrap>
      <FixedContainer>
        <BannerTextWrap>
          <BannerText>
            LET<ColorText>'</ColorText>S
          </BannerText>
          <BannerText>MAKE</BannerText>
          <BannerText>
            S<ColorText>O</ColorText>METHING
          </BannerText>
          <BannerText>
            C<ColorText>OO</ColorText>L
          </BannerText>
          <BannerText>
            T<ColorText>O</ColorText>GETHER<ColorText>.</ColorText>
          </BannerText>
        </BannerTextWrap>
      </FixedContainer>
    </Wrap>
  );
};

export default Hero;
