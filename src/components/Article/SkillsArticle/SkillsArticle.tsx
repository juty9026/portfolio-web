/** @jsxImportSource @emotion/react */
import React from 'react';
import Article from '../Article';
import TechExpBar from '@components/TechExpBar';
import styles from './SkillsArticle.e';

const SkillsArticle: React.FC = () => {
  const parallaxRef = React.useRef<HTMLDivElement>(null);

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
          { name: 'Git', exp: 70 },
          { name: 'Networking', exp: 60 },
          { name: 'Cloud', exp: 20 },
          { name: 'CI / CD', exp: 30 },
          { name: 'Container', exp: 40 },
        ],
      },
    ],
    []
  );

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
      <div style={{ backgroundColor: 'transparent' }} ref={parallaxRef}>
        <div css={styles.wrapper}>
          <section css={styles.flexContainer}>
            {data.map((d) => (
              <TechExpBar
                title={d.position}
                exp={d.exp}
                color={colorPool[Math.floor(Math.random() * colorPool.length)]}
              />
            ))}
          </section>
          <section css={styles.flexContainer}>
            {data
              .find((d) => d.position === 'Front-end')
              ?.relatedSkills.map((d) => (
                <TechExpBar
                  title={d.name}
                  exp={d.exp}
                  color={colorPool[Math.floor(Math.random() * colorPool.length)]}
                />
              ))}
          </section>
        </div>
        <div
          style={{
            height: '40vh',
            display: 'flex',
            flexDirection: 'column',
            padding: '5vh 0 0 0',
          }}
        >
          <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
            <span style={{ flex: 1 }}>HTML5</span>
            <span style={{ flex: 1 }}>CSS3</span>
            <span style={{ flex: 1 }}>SASS</span>
            <span style={{ flex: 1 }}>ES6</span>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
            <span style={{ flex: 1 }}>React</span>
            <span style={{ flex: 1 }}>Vue</span>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
            <span style={{ flex: 1 }}>Node</span>
            <span style={{ flex: 1 }}>Java</span>
            <span style={{ flex: 1 }}>Spring</span>
            <span style={{ flex: 1 }}>JPA</span>
            <span style={{ flex: 1 }}>MyBatis</span>
            <span style={{ flex: 1 }}>MariaDB</span>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
            <span>Figma</span>
            <span>Jenkins</span>
            <span>Zeplin</span>
          </div>
        </div>
      </div>
    </Article>
  );
};

export default SkillsArticle;
