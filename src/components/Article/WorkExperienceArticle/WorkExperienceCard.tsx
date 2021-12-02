import Card from '@components/Card';

interface Props {
  title: string;
  onClick: React.MouseEventHandler;
}

const WorkExperienceCard = ({ title, onClick }: Props) => {
  return (
    <Card style={{ margin: '0.5vh 0.2vw 0.5vh 0.2vw', height: '10vh', cursor: 'pointer' }} onClick={onClick}>
      <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
        <h3>{title}</h3>
      </div>
    </Card>
  );
};

export default WorkExperienceCard;
