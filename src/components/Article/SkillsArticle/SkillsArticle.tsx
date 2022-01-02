import React from 'react';
import styled from '@emotion/styled';
import TechExpBar from '@components/TechExpBar';
import SphericalWordCloud from '@components/SphericalWordCloud';
import Article from '@components/Article/Article';
import { a, config, useTransition } from 'react-spring';

const Wrap = styled.div`
  padding: 5vh 10vw 5vh 10vw;
  display: flex;

  @media (max-width: 1023px) {
    flex-direction: column-reverse;
  }
`;

const SectionFlex = styled.section`
  flex: 1;
`;

const StyledSphericalWordCloud = styled(SphericalWordCloud)`
  width: 100%;
  height: 100%;

  @media (max-width: 1023px) {
    height: 50vh;
  }
`;

const Spacer = styled.div`
  height: 4vh;
`;

const SkillsArticle: React.FC = () => {
  const data = React.useMemo(
    () => [
      {
        position: 'Front-end',
        exp: 70,
        relatedSkills: [
          { tag: 'Javascript', exp: 80 },
          { tag: 'Typescript', exp: 60 },
          { tag: 'React', exp: 80 },
          { tag: 'Vue', exp: 70 },
          { tag: 'Angular', exp: 40 },
        ],
      },
      {
        position: 'Back-end',
        exp: 60,
        relatedSkills: [
          { tag: 'JAVA', exp: 80 },
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
      'Vue',
      'Node',
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
          <div>
            {data.map(({ position, exp }) => (
              <TechExpBar key={position} active={active === position} title={position} exp={exp} onClick={setActive} />
            ))}
          </div>
          <Spacer />
          <div>
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
      <Spacer />
    </Article>
  );
};

export default SkillsArticle;
