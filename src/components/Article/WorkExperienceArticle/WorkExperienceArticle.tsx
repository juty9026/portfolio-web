/** @jsxImportSource @emotion/react */
import React from 'react';
import { WorkExperienceData } from '@types';
import Article from '../Article';
// import ProjectSummary from './ProjectSummary';
import Card from '@components/Card';
import PopupOverlay from '@components/PopupOverlay';

const Component: React.FC = () => {
  return <p>hi</p>;
};
interface Props {
  data: WorkExperienceData;
}

const WorkExperienceCard = ({ title, onClick }: any) => {
  return (
    <Card style={{ margin: '0.5vh 0.2vw 0.5vh 0.2vw', height: '10vh', cursor: 'pointer' }} onClick={onClick}>
      <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
        <h3>{title}</h3>
      </div>
    </Card>
  );
};

const WorkExperience: React.FC<Props> = ({ data }) => {
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
      {/* {data.projects.reverse().map((project) => (
        <Card key={`${project.seq}_${project.name}`} onClick={() => openOverlay(Component)}>
          {project.name}
        </Card>
        <Card key={`${project.seq}_${project.name}`}>{project.name}</Card>
        <ProjectSummary key={`${project.seq}_${project.name}`} data={project} />
      ))} */}
    </Article>
  );
};

export default WorkExperience;
