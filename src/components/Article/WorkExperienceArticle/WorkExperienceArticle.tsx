/** @jsxImportSource @emotion/react */
import React from 'react';
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
    <Article title="Work Expereicne">
      {overlayVisible && (
        <PopupOverlay onClickOutside={() => setOverlayVisible(false)} onKeyDown={onKeyDown}>
          {overlayContent}
        </PopupOverlay>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <WorkExperienceCard onClick={() => openOverlay(P01_TANGO_D)} title="통합 시스템" />
        <WorkExperienceCard onClick={() => openOverlay(P02_LCAP)} title="오픈몰" />
        <WorkExperienceCard onClick={() => openOverlay(P03_SHP)} title="5GX Cloud" />
        <WorkExperienceCard onClick={() => openOverlay(P04_IDCUBE)} title="WDP" />
        <WorkExperienceCard onClick={() => openOverlay(P05_WDP)} title="오픈몰" />
        <WorkExperienceCard onClick={() => openOverlay(P06_HAPP)} title="5GX Cloud" />
        <WorkExperienceCard onClick={() => openOverlay(P07_5GX_CLOUD)} title="HAPP" />
        <WorkExperienceCard onClick={() => openOverlay(P08_OPENMALL)} title="WDP" />
        <WorkExperienceCard onClick={() => openOverlay(P09_WDP)} title="IDCube" />
        <WorkExperienceCard onClick={() => openOverlay(P10_5GX_CLOUD)} title="SHP" />
        <WorkExperienceCard onClick={() => openOverlay(P11_OPENMALL)} title="LCAP" />
        <WorkExperienceCard onClick={() => openOverlay(P12_JUVIS)} title="TANGO-D" />
      </div>
    </Article>
  );
};

export default WorkExperience;
