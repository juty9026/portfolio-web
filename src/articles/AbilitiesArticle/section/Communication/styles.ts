import styled from '@emotion/styled';
import { a } from 'react-spring';
import Spacer from '@/components/Spacer';

export const GridContainer = styled(a.div)`
  display: grid;
  grid-template-areas:
    'content1      .            '
    '.             content2     '
    'bottom-spacer bottom-spacer';
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, minmax(100vh, 100vh));
  place-items: center;
  justify-content: center;

  @media (max-width: 1023px) {
    grid-template-areas:
      'content1'
      'content2'
      'bottom-spacer';
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, minmax(50vh, 50vh));
  }
`;

export const GridStickyContent = styled.div`
  position: sticky;
  top: 0;
  height: 100%;
  display: flex;
  place-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1023px) {
    position: relative;
  }
`;

export const GridBottomSpacer = styled(Spacer)`
  grid-area: bottom-spacer;
`;

export const ConversationImageContainer = styled(a.div)`
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 20vh;
  display: flex;
  place-items: center;
  position: fixed;
  flex-direction: column;
`;

export const ConversationImage = styled.img`
  max-height: 20vh;
`;
