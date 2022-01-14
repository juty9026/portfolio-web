import React from 'react';
import TechExpBar from '@components/TechExpBar';
import Article from '../../templates/Article';
import { a, config, useTransition } from 'react-spring';
import { SectionFlex, StyledSphericalWordCloud, Wrap } from './styles';
import Spacer from '@components/Spacer';

const SkillsArticle: React.FC = () => {
  const data = React.useMemo(
    () => [
      {
        position: 'Front-end',
        exp: 70,
        relatedSkills: [
          { tag: 'JavaScript', exp: 80 },
          { tag: 'TypeScript', exp: 60 },
          { tag: 'React', exp: 80 },
          { tag: 'Vue.js', exp: 70 },
          { tag: 'Angular', exp: 40 },
        ],
      },
      {
        position: 'Back-end',
        exp: 60,
        relatedSkills: [
          { tag: 'Java', exp: 80 },
          { tag: 'Node.js', exp: 30 },
          { tag: 'Spring', exp: 70 },
          { tag: 'JPA / QueryDSL', exp: 60 },
          { tag: 'MySQL / MariaDB', exp: 50 },
        ],
      },
      {
        position: 'DevOps',
        exp: 45,
        relatedSkills: [
          { tag: 'Networking', exp: 60 },
          { tag: 'Cloud', exp: 30 },
          { tag: 'CI / CD', exp: 40 },
          { tag: 'Container', exp: 50 },
        ],
      },
      {
        position: 'Basics',
        exp: 60,
        relatedSkills: [
          { tag: 'Communication', exp: 80 },
          { tag: 'Git', exp: 70 },
          { tag: 'Computer Science', exp: 40 },
          { tag: 'Mathematics', exp: 40 },
        ],
      },
    ],
    []
  );

  const wordCloudData = React.useMemo(
    () => [
      'HTML5',
      'CSS3',
      'SCSS',
      'ES6',
      'React',
      'Vue.js',
      'Node.js',
      'Java',
      'Spring',
      'JPA',
      'MyBatis',
      'MariaDB',
      'Figma',
      'Jenkins',
      'Zeplin',
      'Git',
      'Slack',
      'Networking',
    ],
    []
  );

  const [active, setActive] = React.useState(data[0].position);

  const relatedSkills = React.useMemo(() => {
    const activeItem = active || data[0].position;
    return data.find((item) => item.position === activeItem)?.relatedSkills || [];
  }, [active, data]);

  const transitions = useTransition(
    relatedSkills.map((item, i) => ({ ...item, y: (i + 1) * -40 })),
    {
      from: ({ y }) => ({ y, opacity: 0 }),
      enter: { y: 0, opacity: 1 },
      config: config.molasses,
    }
  );

  return (
    <Article title="Skills">
      <Wrap>
        <SectionFlex>
          <div style={{ zIndex: 1 }}>
            {data.map(({ position, exp }) => (
              <TechExpBar key={position} active={active === position} title={position} exp={exp} onClick={setActive} />
            ))}
          </div>
          <Spacer height="4vh" />
          <p
            style={{
              fontSize: '2rem',
              color: '#03b58d',
              fontWeight: 'bold',
              opacity: 0.8,
              textAlign: 'center',
              zIndex: 0,
            }}
          >
            {active}
          </p>
          <div style={{ zIndex: 1 }}>
            {transitions((style, { tag, exp }, t, index) => (
              <a.div style={{ ...style, zIndex: relatedSkills.length - index }}>
                <TechExpBar key={tag} title={tag} exp={exp} />
              </a.div>
            ))}
          </div>
        </SectionFlex>
        <SectionFlex>
          <StyledSphericalWordCloud data={wordCloudData} />
        </SectionFlex>
      </Wrap>
      <Spacer height="5vh" />
    </Article>
  );
};

export default SkillsArticle;
