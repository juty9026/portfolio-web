/** @jsxImportSource @emotion/react */
import React from 'react';
import Article from '../Article';
import WorkExperienceCard from './WorkExperienceCard';
import PopupOverlay from '@components/PopupOverlay';

const Component: React.FC = () => {
  return <p>hi</p>;
};

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
        <WorkExperienceCard onClick={() => openOverlay(Component)} title="통합 시스템" />
        <WorkExperienceCard onClick={() => openOverlay(Component)} title="오픈몰" />
        <WorkExperienceCard onClick={() => openOverlay(Component)} title="5GX Cloud" />
        <WorkExperienceCard onClick={() => openOverlay(Component)} title="WDP" />
        <WorkExperienceCard onClick={() => openOverlay(Component)} title="오픈몰" />
        <WorkExperienceCard onClick={() => openOverlay(Component)} title="5GX Cloud" />
        <WorkExperienceCard onClick={() => openOverlay(Component)} title="HAPP" />
        <WorkExperienceCard onClick={() => openOverlay(Component)} title="WDP" />
        <WorkExperienceCard onClick={() => openOverlay(Component)} title="IDCube" />
        <WorkExperienceCard onClick={() => openOverlay(Component)} title="SHP" />
        <WorkExperienceCard onClick={() => openOverlay(Component)} title="LCAP" />
        <WorkExperienceCard onClick={() => openOverlay(Component)} title="TANGO-D" />
      </div>
    </Article>
  );
};

export default WorkExperience;
