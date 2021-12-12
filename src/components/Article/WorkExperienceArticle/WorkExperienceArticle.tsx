import React from 'react';
import styled from '@emotion/styled';
import Article from '../Article';
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
import P12_JUVIS from './P12_JUVIS';
import PopupOverlay from '@components/PopupOverlay';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WorkExperience: React.FC = () => {
  const [overlayVisible, setOverlayVisible] = React.useState(false);
  const [overlayContent, setOverlayContent] = React.useState<React.ReactNode>(false);

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
    <Article title="Work Experience">
      {overlayVisible && (
        <PopupOverlay onClickOutside={() => setOverlayVisible(false)} onKeyDown={onKeyDown}>
          {overlayContent}
        </PopupOverlay>
      )}
      <Container>
        <WorkExperienceCard
          onClick={() => openOverlay(P12_JUVIS)}
          partner="JUVIS"
          title="CRM"
          period={{ start: '2021-11-01' }}
        />
        <WorkExperienceCard
          onClick={() => openOverlay(P11_OPENMALL)}
          partner="오픈잇"
          title="오픈몰"
          period={{ start: '2021-10-13', end: '2021-10-29' }}
        />
        <WorkExperienceCard
          onClick={() => openOverlay(P10_5GX_CLOUD)}
          partner="SK C&C"
          title="5GX Cloud"
          period={{ start: '2021-05-03', end: '2021-11-05' }}
        />
        <WorkExperienceCard
          onClick={() => openOverlay(P09_WDP)}
          partner="SK C&C"
          title="WDP"
          period={{ start: '2021-04-03', end: '2021-04-30' }}
        />
        <WorkExperienceCard
          onClick={() => openOverlay(P08_OPENMALL)}
          partner="오픈잇"
          title="오픈몰"
          period={{ start: '2021-02-01', end: '2021-04-02' }}
        />
        <WorkExperienceCard
          onClick={() => openOverlay(P07_5GX_CLOUD)}
          partner="SK C&C"
          title="5GX Cloud"
          period={{ start: '2020-12-01', end: '2021-01-29' }}
        />
        <WorkExperienceCard
          onClick={() => openOverlay(P06_HAPP)}
          partner="SK C&C"
          title="HAPP"
          period={{ start: '2020-06-08', end: '2020-11-30' }}
        />
        <WorkExperienceCard
          onClick={() => openOverlay(P05_WDP)}
          partner="SK C&C"
          title="WDP"
          period={{ start: '2020-04-20', end: '2020-05-29' }}
        />
        <WorkExperienceCard
          onClick={() => openOverlay(P04_IDCUBE)}
          partner="SK C&C"
          title="IDCube"
          period={{ start: '2019-07-22', end: '2020-04-17' }}
        />
        <WorkExperienceCard
          onClick={() => openOverlay(P03_SHP)}
          partner="호텔신라"
          title="SHP"
          period={{ start: '2019-02-08', end: '2019-05-31' }}
        />
        <WorkExperienceCard
          onClick={() => openOverlay(P02_LCAP)}
          partner="SK C&C"
          title="LCAP"
          period={{ start: '2018-08-01', end: '2019-01-31' }}
        />
        <WorkExperienceCard
          onClick={() => openOverlay(P01_TANGO_D)}
          partner="SK C&C"
          title="TANGO-D"
          period={{ start: '2018-02-01', end: '2018-05-31' }}
        />
      </Container>
    </Article>
  );
};

export default WorkExperience;
