import React, { useState } from 'react';
import styled from '@emotion/styled';
import { a, config, useTrail } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import PopupOverlay from '@components/PopupOverlay';
import WorkExperienceCard from './WorkExperienceCard';
import P01_TANGO_D from './P01_TANGO_D';
import P02_LCAP from './P02_LCAP';
import P03_SHP from './P03_SHP';
import P04_IDCUBE from './P04_IDCUBE';
import P05_WDP from './P05_WDP';
import P06_HAPP from './P06_HAPP';
import P07_5GX_CLOUD from './P07_5GX_CLOUD';
import P08_OPENMALL from './P08_OPENMALL';
import P09_WDP from './P09_WDP';
import P10_5GX_CLOUD from './P10_5GX_CLOUD';
import P11_OPENMALL from './P11_OPENMALL';
import P12_JUVIS from '@components/Article/WorkExperienceArticle/P12_JUVIS';
import Article from '@components/Article/Article';
import Partner from '@customTypes/Partner';

const Container = styled.div`
  padding: 5vh 10vw 5vh 10vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const HoverWrap = styled.div`
  z-index: 0;
  flex: 0 30%;
  transition: 0.4s;

  @media (max-width: 767px) {
    flex: 0 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex: 0 50%;
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.2);
      z-index: 1;
    }
  }
`;

interface Work {
  partner: Partner;
  title: string;
  period: {
    start: string;
    end?: string;
  };
  overlayComponent: React.FC;
}
const works: Work[] = [
  { partner: 'JUVIS', title: 'CRM', period: { start: '2021-11-01' }, overlayComponent: P12_JUVIS },
  {
    partner: 'Openit',
    title: '오픈몰',
    period: { start: '2021-10-13', end: '2021-10-29' },
    overlayComponent: P11_OPENMALL,
  },
  {
    partner: 'SKCC',
    title: '5GX Cloud',
    period: { start: '2021-05-03', end: '2021-11-05' },
    overlayComponent: P10_5GX_CLOUD,
  },
  {
    partner: 'SKCC',
    title: 'WDP',
    period: { start: '2021-04-03', end: '2021-04-30' },
    overlayComponent: P09_WDP,
  },
  {
    partner: 'Openit',
    title: '오픈몰',
    period: { start: '2021-02-01', end: '2021-04-02' },
    overlayComponent: P08_OPENMALL,
  },
  {
    partner: 'SKCC',
    title: '5GX Cloud',
    period: { start: '2020-12-01', end: '2021-01-29' },
    overlayComponent: P07_5GX_CLOUD,
  },
  {
    partner: 'SKCC',
    title: 'HAPP',
    period: { start: '2020-06-08', end: '2020-11-30' },
    overlayComponent: P06_HAPP,
  },
  {
    partner: 'SKCC',
    title: 'WDP',
    period: { start: '2020-04-20', end: '2020-05-29' },
    overlayComponent: P05_WDP,
  },
  {
    partner: 'SKCC',
    title: 'IDCube',
    period: { start: '2019-07-22', end: '2020-04-17' },
    overlayComponent: P04_IDCUBE,
  },
  {
    partner: 'HotelShilla',
    title: 'SHP',
    period: { start: '2019-02-08', end: '2019-05-31' },
    overlayComponent: P03_SHP,
  },
  {
    partner: 'SKCC',
    title: 'LCAP',
    period: { start: '2018-08-01', end: '2019-01-31' },
    overlayComponent: P02_LCAP,
  },
  {
    partner: 'SKCC',
    title: 'TANGO-D',
    period: { start: '2018-02-01', end: '2018-05-31' },
    overlayComponent: P01_TANGO_D,
  },
];

const WorkExperience: React.FC = () => {
  const [overlayVisible, setOverlayVisible] = React.useState(false);
  const [overlayContent, setOverlayContent] = React.useState<React.ReactNode>(false);
  const [cardVisible, setCardVisible] = useState(false);

  const trail = useTrail(works.length, {
    opacity: cardVisible ? 1 : 0,
    scale: cardVisible ? 1 : 0,
    config: config.gentle,
  });

  const openOverlay = React.useCallback((content) => {
    setOverlayVisible(true);
    setOverlayContent(content);
  }, []);

  const onKeyDown = React.useCallback((e: KeyboardEvent) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setOverlayVisible(false);
    }
  }, []);

  return (
    <Article title="Works & Experience">
      <Waypoint
        onEnter={() => setCardVisible(true)}
        onLeave={({ currentPosition }) => setCardVisible(currentPosition === 'above')}
      />
      {overlayVisible && (
        <PopupOverlay onClickOutside={() => setOverlayVisible(false)} onKeyDown={onKeyDown}>
          {overlayContent}
        </PopupOverlay>
      )}
      <Container>
        {trail.map((style, index) => (
          <HoverWrap>
            <a.div style={style}>
              <WorkExperienceCard
                partner={works[index].partner}
                title={works[index].title}
                period={works[index].period}
                onClick={() => openOverlay(works[index].overlayComponent)}
              />
            </a.div>
          </HoverWrap>
        ))}
      </Container>
    </Article>
  );
};

export default WorkExperience;
