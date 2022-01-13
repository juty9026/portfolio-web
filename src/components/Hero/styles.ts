import styled from '@emotion/styled';

export const Wrap = styled.header`
  height: 100vh;
`;

export const FixedContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 10%;
  background-color: #262626;
  color: white;
`;

export const BannerTextWrap = styled.div`
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
    flex-direction: column;
  }
`;

export const ColorText = styled.span`
  color: #03b58d;
`;
