import styled from '@emotion/styled';
import SphericalWordCloud from '@/components/SphericalWordCloud';

export const Wrap = styled.div`
  padding: 5%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1023px) {
    flex-direction: column-reverse;
  }
`;

export const SectionFlex = styled.section`
  flex: 1;
`;

export const StyledSphericalWordCloud = styled(SphericalWordCloud)`
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    height: 50vh;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 65vh;
  }
`;
