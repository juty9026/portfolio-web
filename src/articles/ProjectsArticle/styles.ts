import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 5% 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

export const HoverWrap = styled.div`
  z-index: 0;
  flex: 0 30%;
  transition: 0.4s;

  @media (max-width: 767px) {
    flex: 0 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex: 0 45%;
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.2);
      z-index: 1;
    }
  }
`;
