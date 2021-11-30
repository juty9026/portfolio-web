/** @jsxImportSource @emotion/react */
import React from 'react';
import Article from '../Article';
import TechExpBar from '@components/TechExpBar';
import styles from './SkillsArticle.e';
import SphericalWordCloud from '@components/SphericalWordCloud';

const SkillsArticle: React.FC = () => {
  const [active, setActive] = React.useState(null);

  const data = React.useMemo(
    () => [
      {
        position: 'Front-end',
        exp: 60,
        relatedSkills: [
          { name: 'Pure Javascript / ES6+', exp: 80 },
          { name: 'Typescript', exp: 30 },
          { name: 'React', exp: 80 },
          { name: 'Vue', exp: 60 },
          { name: 'Angular', exp: 30 },
        ],
      },
      {
        position: 'Back-end',
        exp: 50,
        relatedSkills: [
          { name: 'JAVA', exp: 80 },
          { name: 'Spring Framework', exp: 60 },
          { name: 'Spring Data JPA', exp: 40 },
          { name: 'Node', exp: 20 },
          { name: 'MySQL / MariaDB', exp: 50 },
        ],
      },
      {
        position: 'DevOps',
        exp: 30,
        relatedSkills: [
          { name: 'Networking', exp: 60 },
          { name: 'Cloud', exp: 20 },
          { name: 'CI / CD', exp: 30 },
          { name: 'Container', exp: 40 },
        ],
      },
      {
        position: 'Basics',
        exp: 50,
        relatedSkills: [
          { name: 'Communication', exp: 80 },
          { name: 'Git', exp: 70 },
          { name: 'Computer Science', exp: 40 },
          { name: 'Mathematics', exp: 40 },
        ],
      },
    ],
    []
  );

  const subItems = React.useMemo(() => {
    const activeItem = active || data[0].position;
    return data.find((item) => item.position === activeItem)?.relatedSkills || [];
  }, [active, data]);

  const colorPool = React.useMemo(
    () => [
      '#41ead4',
      '#ff0022',
      '#ebcfb2',
      '#0f2c67',
      '#cd1818',
      '#f3950d',
      '#f4e185',
      '#3f0713',
      '#b24080',
      '#ecac5d',
      '#fff9b2',
      '#ff7c7c',
      '#ffd082',
      '#88e1f2',
    ],
    []
  );

  return (
    <Article title="Skills & Expereince">
      <div style={{ backgroundColor: 'transparent' }}>
        <div css={styles.wrapper}>
          <div css={[styles.flexContainer, styles.leftContainer]}>
            <section>
              {data.map(({ position, exp }) => (
                <TechExpBar
                  key={position}
                  style={{ cursor: 'pointer' }}
                  title={position}
                  exp={exp}
                  color={colorPool[Math.floor(Math.random() * colorPool.length)]}
                  onClick={setActive}
                />
              ))}
            </section>
            <div css={styles.spacer} />
            <section>
              {subItems.map(({ name, exp }) => (
                <TechExpBar
                  key={name}
                  title={name}
                  exp={exp}
                  color={colorPool[Math.floor(Math.random() * colorPool.length)]}
                />
              ))}
            </section>
          </div>
          <div css={[styles.flexContainer, styles.rightContainer]}>
            <SphericalWordCloud
              data={[
                'HTML5',
                'CSS3',
                'SASS',
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
              ]}
            />
          </div>
        </div>
      </div>
    </Article>
  );
};

export default SkillsArticle;
