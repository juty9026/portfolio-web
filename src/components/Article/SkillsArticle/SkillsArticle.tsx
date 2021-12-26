/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import TechExpBar from '@components/TechExpBar';
import SphericalWordCloud from '@components/SphericalWordCloud';
import Article from '@components/Article/Article';

const Wrap = styled.div`
  padding: 5vh 10vw 5vh 10vw;
  display: flex;
  flex-wrap: wrap-reverse;
`;

const ExpBarSection = styled.section`
  flex: 1 0 400px;
`;

const WordSection = styled.section`
  flex: 1 0 800px;
`;

const Spacer = styled.div`
  height: 4vh;
`;

const SkillsArticle: React.FC = () => {
  const data = React.useMemo(
    () => [
      {
        position: 'Front-end',
        exp: 60,
        relatedSkills: [
          { tag: 'Javascript', exp: 80 },
          { tag: 'Typescript', exp: 40 },
          { tag: 'React', exp: 80 },
          { tag: 'Vue', exp: 60 },
          { tag: 'Angular', exp: 30 },
        ],
      },
      {
        position: 'Back-end',
        exp: 50,
        relatedSkills: [
          { tag: 'JAVA', exp: 80 },
          { tag: 'Node.js', exp: 30 },
          { tag: 'Spring', exp: 60 },
          { tag: 'JPA', exp: 40 },
          { tag: 'MySQL / MariaDB', exp: 50 },
        ],
      },
      {
        position: 'DevOps',
        exp: 30,
        relatedSkills: [
          { tag: 'Networking', exp: 60 },
          { tag: 'Cloud', exp: 20 },
          { tag: 'CI / CD', exp: 30 },
          { tag: 'Container', exp: 40 },
        ],
      },
      {
        position: 'Basics',
        exp: 50,
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

  return (
    <Article title="Skills">
      <Wrap>
        <ExpBarSection>
          <div>
            {data.map(({ position, exp }) => (
              <TechExpBar key={position} active={active === position} title={position} exp={exp} onClick={setActive} />
            ))}
          </div>
          <Spacer />
          <div>
            {relatedSkills.map(({ tag, exp }) => (
              <TechExpBar key={tag} title={tag} exp={exp} />
            ))}
          </div>
        </ExpBarSection>
        <WordSection>
          <SphericalWordCloud data={wordCloudData} />
        </WordSection>
      </Wrap>
      <Spacer />
    </Article>
  );
};

export default SkillsArticle;
